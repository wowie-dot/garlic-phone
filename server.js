const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

const rooms = {};

function genCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({length: 4}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function buildChains(players) {
  const n = players.length;
  const shuffled = [...players].sort(() => Math.random() - 0.5);
  const chains = shuffled.map(p => ({ starter: p.name, steps: [] }));
  const assignments = [];
  for (let round = 0; round < n; round++) {
    const roundAssign = [];
    for (let chainIdx = 0; chainIdx < n; chainIdx++) {
      const playerIdx = (chainIdx + round) % n;
      roundAssign.push({ chain: chainIdx, playerName: shuffled[playerIdx].name });
    }
    assignments.push(roundAssign);
  }
  return { chains, assignments };
}

io.on('connection', (socket) => {
  socket.on('create_room', ({ name, timePerRound }) => {
    let code = genCode();
    while (rooms[code]) code = genCode();
    const room = {
      code, host: socket.id, timePerRound: timePerRound || 60,
      players: [{ id: socket.id, name, isHost: true }],
      state: 'lobby', chains: [], assignments: [],
      currentRound: 0, submitted: {}, timers: {}
    };
    rooms[code] = room;
    socket.join(code);
    socket.emit('room_created', { code });
    io.to(code).emit('lobby_update', getLobbyData(room));
  });

  socket.on('join_room', ({ name, code }) => {
    const room = rooms[code];
    if (!room) { socket.emit('error_msg', 'Raum nicht gefunden.'); return; }
    if (room.state !== 'lobby') { socket.emit('error_msg', 'Spiel läuft bereits.'); return; }
    if (room.players.length >= 14) { socket.emit('error_msg', 'Raum ist voll.'); return; }
    if (room.players.some(p => p.name.toLowerCase() === name.toLowerCase())) { socket.emit('error_msg', 'Name vergeben.'); return; }
    room.players.push({ id: socket.id, name, isHost: false });
    socket.join(code);
    socket.emit('room_joined', { code });
    io.to(code).emit('lobby_update', getLobbyData(room));
  });

  socket.on('start_game', ({ code }) => {
    const room = rooms[code];
    if (!room || room.host !== socket.id) return;
    if (room.players.length < 3) { socket.emit('error_msg', 'Mindestens 3 Spieler.'); return; }
    const { chains, assignments } = buildChains(room.players);
    room.chains = chains; room.assignments = assignments;
    room.currentRound = 0; room.state = 'playing'; room.submitted = {};
    startRound(room);
  });

  socket.on('submit_step', ({ code, content }) => {
    const room = rooms[code];
    if (!room || room.state !== 'playing') return;
    const player = room.players.find(p => p.id === socket.id);
    if (!player || room.submitted[player.name]) return;
    const assignment = room.assignments[room.currentRound].find(a => a.playerName === player.name);
    if (!assignment) return;
    room.submitted[player.name] = { content, chainIdx: assignment.chain };
    socket.emit('step_accepted');
    if (Object.keys(room.submitted).length === room.players.length) {
      clearRoundTimer(room); processSubmissions(room);
    }
  });

  socket.on('disconnect', () => {
    for (const code in rooms) {
      const room = rooms[code];
      const idx = room.players.findIndex(p => p.id === socket.id);
      if (idx !== -1) {
        const name = room.players[idx].name;
        room.players.splice(idx, 1);
        if (room.state === 'lobby') {
          if (room.players.length === 0) { delete rooms[code]; }
          else {
            if (room.host === socket.id) { room.host = room.players[0].id; room.players[0].isHost = true; }
            io.to(code).emit('lobby_update', getLobbyData(room));
          }
        } else { io.to(code).emit('player_left', { name }); }
        break;
      }
    }
  });
});

function getLobbyData(room) {
  return { code: room.code, players: room.players.map(p => ({ name: p.name, isHost: p.isHost })), timePerRound: room.timePerRound };
}

function startRound(room) {
  const round = room.currentRound;
  const n = room.players.length;
  const type = round === 0 ? 'write' : (round % 2 === 1 ? 'draw' : 'guess');
  room.submitted = {};
  room.players.forEach(player => {
    const assignment = room.assignments[round].find(a => a.playerName === player.name);
    const chain = room.chains[assignment.chain];
    const lastStep = chain.steps[chain.steps.length - 1] || null;
    io.to(player.id).emit('round_start', { round, totalRounds: n, type, prompt: lastStep ? lastStep.content : null, timePerRound: room.timePerRound });
  });
  room.timers.roundTimer = setTimeout(() => forceSubmitMissing(room), (room.timePerRound + 3) * 1000);
}

function forceSubmitMissing(room) {
  room.players.forEach(player => {
    if (!room.submitted[player.name]) {
      const assignment = room.assignments[room.currentRound].find(a => a.playerName === player.name);
      room.submitted[player.name] = { content: '(keine Antwort)', chainIdx: assignment.chain };
    }
  });
  processSubmissions(room);
}

function clearRoundTimer(room) {
  if (room.timers.roundTimer) { clearTimeout(room.timers.roundTimer); room.timers.roundTimer = null; }
}

function processSubmissions(room) {
  const round = room.currentRound;
  const type = round === 0 ? 'write' : (round % 2 === 1 ? 'draw' : 'guess');
  Object.entries(room.submitted).forEach(([playerName, { content, chainIdx }]) => {
    room.chains[chainIdx].steps.push({ type: type === 'draw' ? 'image' : 'text', content, by: playerName });
  });
  room.currentRound++;
  if (room.currentRound >= room.players.length) { endGame(room); }
  else { io.to(room.code).emit('round_transition', {}); setTimeout(() => startRound(room), 1500); }
}

function endGame(room) {
  room.state = 'reveal';
  io.to(room.code).emit('game_over', { chains: room.chains });
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
