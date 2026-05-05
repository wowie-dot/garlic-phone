<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Gartic Phone Clone</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg: #f5f4f0;
    --surface: #ffffff;
    --border: rgba(0,0,0,0.12);
    --text: #1a1a1a;
    --muted: #6b6b6b;
    --accent: #1a1a1a;
    --danger: #E24B4A;
    --info-bg: #E6F1FB;
    --info-text: #185FA5;
    --radius: 12px;
    --radius-sm: 8px;
  }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; }
  #app { max-width: 680px; margin: 0 auto; padding: 1.5rem 1rem 4rem; }
  .screen { display: none; }
  .screen.active { display: block; }

  /* Typography */
  h1 { font-size: 2.2rem; font-weight: 600; margin-bottom: 0.4rem; }
  h2 { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.75rem; }
  .subtitle { color: var(--muted); font-size: 14px; }
  .muted { color: var(--muted); font-size: 13px; }

  /* Cards */
  .card { background: var(--surface); border: 0.5px solid var(--border); border-radius: var(--radius); padding: 1.5rem; margin-bottom: 1rem; }
  .card-sm { background: rgba(0,0,0,0.04); border-radius: var(--radius-sm); padding: 0.75rem 1rem; margin-bottom: 1rem; font-size: 14px; }

  /* Inputs */
  input[type=text] { width: 100%; padding: 0.6rem 0.9rem; border: 0.5px solid var(--border); border-radius: var(--radius-sm); font-size: 15px; background: var(--surface); color: var(--text); outline: none; transition: border-color 0.15s; margin-bottom: 0.75rem; }
  input[type=text]:focus { border-color: var(--accent); }
  input[type=range] { cursor: pointer; }

  /* Buttons */
  .btn { cursor: pointer; font-size: 14px; font-weight: 500; border-radius: var(--radius-sm); padding: 0.6rem 1.4rem; transition: opacity 0.15s, background 0.15s; border: none; }
  .btn-primary { background: var(--accent); color: #fff; }
  .btn-primary:hover { opacity: 0.8; }
  .btn-primary:disabled { opacity: 0.35; cursor: not-allowed; }
  .btn-secondary { background: transparent; color: var(--text); border: 0.5px solid var(--border); }
  .btn-secondary:hover { background: rgba(0,0,0,0.05); }
  .btn-full { width: 100%; display: block; }

  /* Player chips */
  .player-list { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.75rem 0; }
  .player-chip { background: var(--bg); border: 0.5px solid var(--border); border-radius: 999px; padding: 4px 14px; font-size: 13px; display: flex; align-items: center; gap: 6px; }

  /* Room code */
  .big-code { font-size: 2.8rem; font-weight: 700; letter-spacing: 0.25em; text-align: center; padding: 1rem 0; color: var(--accent); font-variant-numeric: tabular-nums; }

  /* Progress bar */
  .progress-bar { background: rgba(0,0,0,0.08); border-radius: 999px; height: 5px; overflow: hidden; margin-bottom: 0.4rem; }
  .progress-fill { background: var(--accent); height: 100%; border-radius: 999px; transition: width 1s linear; }

  /* Canvas & drawing tools */
  canvas { border: 0.5px solid var(--border); border-radius: var(--radius-sm); display: block; width: 100%; cursor: crosshair; touch-action: none; background: #fff; }
  .tools { display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; margin-bottom: 0.75rem; }
  .color-swatch { width: 28px; height: 28px; border-radius: 50%; cursor: pointer; border: 2px solid transparent; flex-shrink: 0; transition: transform 0.1s; }
  .color-swatch:hover, .color-swatch.sel { transform: scale(1.2); border-color: #1a1a1a; }
  .tool-btn { background: rgba(0,0,0,0.05); border: 0.5px solid var(--border); border-radius: var(--radius-sm); padding: 4px 10px; font-size: 12px; cursor: pointer; color: var(--muted); }
  .tool-btn.sel { background: var(--accent); color: #fff; border-color: transparent; }

  /* Chain reveal */
  .chain-step { border: 0.5px solid var(--border); border-radius: var(--radius-sm); padding: 0.75rem 1rem; margin-bottom: 0.5rem; }
  .chain-step img { width: 100%; border-radius: var(--radius-sm); margin-top: 0.5rem; }
  .step-label { font-size: 11px; color: var(--muted); margin-bottom: 4px; }
  .step-text { font-size: 15px; }

  /* Misc */
  .row { display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; }
  .tag { background: var(--info-bg); color: var(--info-text); font-size: 12px; padding: 3px 10px; border-radius: 999px; }
  .err { color: var(--danger); font-size: 13px; min-height: 18px; margin-top: 0.35rem; }
  .center { text-align: center; }
  .spin { animation: spin 1.5s linear infinite; display: inline-block; font-size: 2rem; }
  @keyframes spin { to { transform: rotate(360deg); } }

  .waiting-wrap { padding: 3rem 1rem; text-align: center; }
  .waiting-wrap h2 { margin-bottom: 0.5rem; }

  .reveal-nav { display: flex; gap: 0.75rem; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; }
</style>
</head>
<body>
<div id="app">

  <!-- HOME -->
  <div class="screen active" id="screen-home">
    <div style="text-align:center; padding:2.5rem 0 2rem;">
      <div style="font-size:3.5rem; margin-bottom:0.5rem;">📞</div>
      <h1>Gartic Phone</h1>
      <p class="subtitle" style="margin-bottom:2rem;">Zeichnen · Raten · Lachen</p>
      <div style="max-width:320px; margin:0 auto;">
        <input type="text" id="home-name" placeholder="Dein Name" maxlength="20" />
        <div class="row" style="justify-content:center; margin-bottom:0.75rem;">
          <button class="btn btn-primary" onclick="createRoom()">Raum erstellen</button>
          <button class="btn btn-secondary" onclick="toggleJoin()">Beitreten</button>
        </div>
        <div id="join-area" style="display:none;">
          <input type="text" id="join-code" placeholder="Raumcode (z.B. AB3X)" maxlength="4" style="text-transform:uppercase; text-align:center; font-size:1.4rem; letter-spacing:0.2em;" />
          <button class="btn btn-primary btn-full" onclick="joinRoom()">Beitreten ✓</button>
        </div>
        <p class="err" id="home-err"></p>
      </div>
    </div>
  </div>

  <!-- LOBBY -->
  <div class="screen" id="screen-lobby">
    <div class="row" style="margin-bottom:1rem;">
      <h2 style="margin:0; flex:1;">Lobby</h2>
      <span class="tag" id="lobby-role-tag">Host</span>
    </div>
    <div class="card center">
      <p class="muted">Raumcode – schick ihn deinen Freunden</p>
      <div class="big-code" id="lobby-code">----</div>
      <p class="muted">3 bis 14 Spieler</p>
    </div>
    <div class="card">
      <div class="row" style="margin-bottom:0.5rem;">
        <span style="font-size:14px; font-weight:600; flex:1;">Spieler</span>
        <span class="muted" id="lobby-count">0 / 14</span>
      </div>
      <div class="player-list" id="lobby-players"></div>
    </div>
    <div class="card" id="lobby-settings">
      <div style="font-size:14px; font-weight:600; margin-bottom:0.75rem;">Einstellungen</div>
      <div class="row">
        <span class="muted" style="flex:1;">Sekunden pro Runde</span>
        <input type="range" min="30" max="120" step="10" value="60" id="time-slider" oninput="document.getElementById('time-val').textContent=this.value+'s'" style="width:100px;" />
        <span style="font-size:13px; font-weight:500; min-width:34px;" id="time-val">60s</span>
      </div>
    </div>
    <button class="btn btn-primary btn-full" id="start-btn" onclick="startGame()" disabled>Spiel starten</button>
    <p class="err center" id="lobby-err"></p>
  </div>

  <!-- WRITE -->
  <div class="screen" id="screen-write">
    <div class="card-sm" id="write-header"></div>
    <div class="card">
      <h2>Schreibe einen Satz ✏️</h2>
      <p class="muted" style="margin-bottom:1rem;">Irgendetwas – je verrückter, desto besser!</p>
      <input type="text" id="write-input" placeholder="z.B. Ein Pinguin reitet auf einem Einhorn..." maxlength="80" />
      <div class="progress-bar"><div class="progress-fill" id="write-bar" style="width:100%"></div></div>
      <div class="row" style="justify-content:space-between;">
        <span class="muted" id="write-time">60s</span>
        <button class="btn btn-primary" onclick="submitStep('write')">Fertig ✓</button>
      </div>
    </div>
  </div>

  <!-- DRAW -->
  <div class="screen" id="screen-draw">
    <div class="card-sm" id="draw-header"></div>
    <div class="card">
      <h2>Zeichne diesen Satz 🎨</h2>
      <div id="draw-prompt" style="background:rgba(0,0,0,0.04); border-radius:var(--radius-sm); padding:0.75rem 1rem; font-size:1rem; font-weight:600; margin-bottom:1rem;"></div>
      <div class="tools" id="color-tools"></div>
      <div class="tools">
        <span class="muted" style="font-size:12px;">Größe:</span>
        <input type="range" min="2" max="30" value="5" id="brush-size" style="width:90px;" oninput="bs=parseInt(this.value);document.getElementById('bs-label').textContent=bs+'px'" />
        <span style="font-size:12px; min-width:28px;" id="bs-label">5px</span>
        <button class="tool-btn sel" id="btn-pen" onclick="setTool('pen')">Stift</button>
        <button class="tool-btn" id="btn-eraser" onclick="setTool('eraser')">Radierer</button>
        <button class="tool-btn" onclick="clearCanvas()">Löschen</button>
      </div>
      <canvas id="draw-canvas" width="600" height="320"></canvas>
      <div class="progress-bar" style="margin-top:0.75rem;"><div class="progress-fill" id="draw-bar" style="width:100%"></div></div>
      <div class="row" style="justify-content:space-between; margin-top:0.5rem;">
        <span class="muted" id="draw-time">60s</span>
        <button class="btn btn-primary" onclick="submitStep('draw')">Fertig ✓</button>
      </div>
    </div>
  </div>

  <!-- GUESS -->
  <div class="screen" id="screen-guess">
    <div class="card-sm" id="guess-header"></div>
    <div class="card">
      <h2>Was siehst du hier? 🔍</h2>
      <img id="guess-img" src="" alt="Zeichnung" style="width:100%; border-radius:var(--radius-sm); border:0.5px solid var(--border); margin-bottom:1rem;" />
      <div class="progress-bar"><div class="progress-fill" id="guess-bar" style="width:100%"></div></div>
      <div class="row" style="justify-content:space-between; margin:0.5rem 0 0.75rem;">
        <span class="muted" id="guess-time">60s</span>
      </div>
      <div class="row">
        <input type="text" id="guess-input" placeholder="Was wird hier gezeichnet?" maxlength="80" style="flex:1; margin:0;" />
        <button class="btn btn-primary" onclick="submitStep('guess')">Fertig ✓</button>
      </div>
    </div>
  </div>

  <!-- WAITING -->
  <div class="screen" id="screen-wait">
    <div class="waiting-wrap">
      <div class="spin">⏳</div>
      <h2 style="margin-top:1rem;">Warte auf andere Spieler...</h2>
      <p class="muted" id="wait-submitted"></p>
    </div>
  </div>

  <!-- REVEAL -->
  <div class="screen" id="screen-reveal">
    <div class="reveal-nav">
      <h2 style="margin:0; flex:1;">Ergebnisse 🎉</h2>
      <span class="muted" id="chain-counter"></span>
      <button class="btn btn-secondary" id="btn-prev" onclick="prevChain()">← Zurück</button>
      <button class="btn btn-primary" id="btn-next" onclick="nextChain()">Weiter →</button>
    </div>
    <div class="card-sm" id="chain-title"></div>
    <div id="chain-content"></div>
    <div id="reveal-end" style="display:none; margin-top:1rem;">
      <button class="btn btn-primary btn-full" onclick="location.reload()">Nochmal spielen 🔄</button>
    </div>
  </div>

</div>

<script src="/socket.io/socket.io.js"></script>
<script>
const socket = io();
let myName = '';
let myRoom = '';
let myTotalRounds = 0;
let timerInterval = null;
let timeLeft = 60;
let totalTime = 60;
let drawTool = 'pen';
let brushColor = '#1a1a1a';
let bs = 5;
let isDrawing = false;
let allChains = [];
let revealIdx = 0;
const COLORS = ['#1a1a1a','#E24B4A','#378ADD','#3B6D11','#EF9F27','#D4537E','#1D9E75','#ffffff'];

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-'+id).classList.add('active');
}

function toggleJoin() {
  const a = document.getElementById('join-area');
  a.style.display = a.style.display === 'none' ? 'block' : 'none';
}

function createRoom() {
  const name = document.getElementById('home-name').value.trim();
  if (!name) { document.getElementById('home-err').textContent = 'Bitte gib deinen Namen ein.'; return; }
  myName = name;
  socket.emit('create_room', { name, timePerRound: 60 });
}

function joinRoom() {
  const name = document.getElementById('home-name').value.trim();
  const code = document.getElementById('join-code').value.trim().toUpperCase();
  if (!name) { document.getElementById('home-err').textContent = 'Bitte gib deinen Namen ein.'; return; }
  if (!code || code.length < 3) { document.getElementById('home-err').textContent = 'Ungültiger Code.'; return; }
  myName = name;
  socket.emit('join_room', { name, code });
}

function startGame() {
  const t = parseInt(document.getElementById('time-slider').value);
  socket.emit('start_game', { code: myRoom, timePerRound: t });
}

socket.on('room_created', ({ code }) => {
  myRoom = code;
  document.getElementById('lobby-code').textContent = code;
  document.getElementById('lobby-role-tag').textContent = 'Host';
  document.getElementById('lobby-settings').style.display = 'block';
  document.getElementById('start-btn').style.display = 'block';
  showScreen('lobby');
});

socket.on('room_joined', ({ code }) => {
  myRoom = code;
  document.getElementById('lobby-code').textContent = code;
  document.getElementById('lobby-role-tag').textContent = 'Gast';
  document.getElementById('lobby-settings').style.display = 'none';
  document.getElementById('start-btn').style.display = 'none';
  showScreen('lobby');
});

socket.on('lobby_update', ({ players }) => {
  const list = document.getElementById('lobby-players');
  list.innerHTML = '';
  players.forEach(p => {
    const chip = document.createElement('div');
    chip.className = 'player-chip';
    chip.textContent = p.name + (p.isHost ? ' 👑' : '');
    list.appendChild(chip);
  });
  document.getElementById('lobby-count').textContent = `${players.length} / 14`;
  const btn = document.getElementById('start-btn');
  btn.disabled = players.length < 3;
});

socket.on('error_msg', msg => {
  document.getElementById('home-err').textContent = msg;
  document.getElementById('lobby-err').textContent = msg;
});

socket.on('round_start', ({ round, totalRounds, type, prompt, timePerRound }) => {
  clearTimer();
  myTotalRounds = totalRounds;
  totalTime = timePerRound;

  if (type === 'write') {
    document.getElementById('write-header').innerHTML =
      `<b>${myName}</b> &nbsp;<span class="muted">– Runde ${round+1} von ${totalRounds}</span>`;
    document.getElementById('write-input').value = '';
    showScreen('write');
    startTimer('write-bar', 'write-time', timePerRound, () => submitStep('write', true));
  } else if (type === 'draw') {
    document.getElementById('draw-header').innerHTML =
      `<b>${myName}</b> &nbsp;<span class="muted">– Runde ${round+1} von ${totalRounds}</span>`;
    document.getElementById('draw-prompt').textContent = prompt || '';
    initCanvas();
    showScreen('draw');
    startTimer('draw-bar', 'draw-time', timePerRound, () => submitStep('draw', true));
  } else {
    document.getElementById('guess-header').innerHTML =
      `<b>${myName}</b> &nbsp;<span class="muted">– Runde ${round+1} von ${totalRounds}</span>`;
    document.getElementById('guess-img').src = prompt || '';
    document.getElementById('guess-input').value = '';
    showScreen('guess');
    startTimer('guess-bar', 'guess-time', timePerRound, () => submitStep('guess', true));
  }
});

socket.on('step_accepted', () => {
  clearTimer();
  document.getElementById('wait-submitted').textContent = 'Deine Antwort wurde gespeichert.';
  showScreen('wait');
});

socket.on('round_transition', () => {
  document.getElementById('wait-submitted').textContent = 'Nächste Runde beginnt...';
});

socket.on('game_over', ({ chains }) => {
  allChains = chains;
  revealIdx = 0;
  renderChain();
  showScreen('reveal');
});

socket.on('player_left', ({ name }) => {
  document.getElementById('wait-submitted').textContent = `${name} hat das Spiel verlassen.`;
});

function submitStep(type, auto) {
  clearTimer();
  let content = '';
  if (type === 'write') content = document.getElementById('write-input').value.trim() || '(kein Text)';
  else if (type === 'guess') content = document.getElementById('guess-input').value.trim() || '(keine Antwort)';
  else if (type === 'draw') content = document.getElementById('draw-canvas').toDataURL('image/png');
  socket.emit('submit_step', { code: myRoom, content });
}

function startTimer(barId, labelId, secs, onEnd) {
  timeLeft = secs;
  updateTimer(barId, labelId, secs, secs);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer(barId, labelId, timeLeft, secs);
    if (timeLeft <= 0) { clearTimer(); onEnd(); }
  }, 1000);
}

function updateTimer(barId, labelId, left, total) {
  const bar = document.getElementById(barId);
  const lbl = document.getElementById(labelId);
  if (bar) bar.style.width = Math.max(0, left/total*100) + '%';
  if (lbl) lbl.textContent = left + 's';
}

function clearTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

function initCanvas() {
  const canvas = document.getElementById('draw-canvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  isDrawing = false;
  drawTool = 'pen';
  brushColor = '#1a1a1a';
  bs = 5;
  document.getElementById('brush-size').value = 5;
  document.getElementById('bs-label').textContent = '5px';
  document.getElementById('btn-pen').classList.add('sel');
  document.getElementById('btn-eraser').classList.remove('sel');

  const ct = document.getElementById('color-tools');
  ct.innerHTML = '<span class="muted" style="font-size:12px;">Farbe:</span>';
  COLORS.forEach(c => {
    const sw = document.createElement('div');
    sw.className = 'color-swatch' + (c === '#1a1a1a' ? ' sel' : '');
    sw.style.background = c;
    if (c === '#ffffff') sw.style.border = '1px solid #ccc';
    sw.onclick = () => {
      document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('sel'));
      sw.classList.add('sel');
      brushColor = c;
      drawTool = 'pen';
      document.getElementById('btn-pen').classList.add('sel');
      document.getElementById('btn-eraser').classList.remove('sel');
    };
    ct.appendChild(sw);
  });

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const sx = canvas.width / rect.width;
    const sy = canvas.height / rect.height;
    const src = e.touches ? e.touches[0] : e;
    return { x: (src.clientX - rect.left) * sx, y: (src.clientY - rect.top) * sy };
  }

  canvas.onmousedown = canvas.ontouchstart = (e) => {
    e.preventDefault(); isDrawing = true;
    const p = getPos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y);
  };
  canvas.onmousemove = canvas.ontouchmove = (e) => {
    e.preventDefault(); if (!isDrawing) return;
    const p = getPos(e);
    ctx.lineWidth = bs; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    if (drawTool === 'eraser') { ctx.globalCompositeOperation = 'destination-out'; ctx.strokeStyle = 'rgba(0,0,0,1)'; }
    else { ctx.globalCompositeOperation = 'source-over'; ctx.strokeStyle = brushColor; }
    ctx.lineTo(p.x, p.y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(p.x, p.y);
  };
  canvas.onmouseup = canvas.onmouseleave = canvas.ontouchend = (e) => {
    isDrawing = false; ctx.globalCompositeOperation = 'source-over';
  };
}

function setTool(t) {
  drawTool = t;
  document.getElementById('btn-pen').classList.toggle('sel', t === 'pen');
  document.getElementById('btn-eraser').classList.toggle('sel', t === 'eraser');
}

function clearCanvas() {
  const canvas = document.getElementById('draw-canvas');
  const ctx = canvas.getContext('2d');
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function renderChain() {
  const chain = allChains[revealIdx];
  document.getElementById('chain-counter').textContent = `Kette ${revealIdx+1} von ${allChains.length}`;
  document.getElementById('chain-title').innerHTML = `📖 Kette von <b>${chain.starter}</b>`;
  const content = document.getElementById('chain-content');
  content.innerHTML = '';
  chain.steps.forEach((step, i) => {
    const el = document.createElement('div');
    el.className = 'chain-step';
    if (step.type === 'image') {
      el.innerHTML = `<div class="step-label">Zeichnung von ${step.by}</div><img src="${step.content}" alt="zeichnung" />`;
    } else {
      const icon = i === 0 ? '✏️' : '💬';
      const label = i === 0 ? `Originalidee von ${step.by}` : `Beschreibung von ${step.by}`;
      el.innerHTML = `<div class="step-label">${label}</div><div class="step-text">${icon} "${step.content}"</div>`;
    }
    content.appendChild(el);
  });
  document.getElementById('btn-prev').style.opacity = revealIdx > 0 ? '1' : '0.3';
  document.getElementById('btn-next').textContent = revealIdx < allChains.length - 1 ? 'Weiter →' : 'Ende ✓';
  document.getElementById('reveal-end').style.display = revealIdx >= allChains.length - 1 ? 'block' : 'none';
}

function nextChain() { if (revealIdx < allChains.length - 1) { revealIdx++; renderChain(); } }
function prevChain() { if (revealIdx > 0) { revealIdx--; renderChain(); } }
</script>
</body>
</html>
