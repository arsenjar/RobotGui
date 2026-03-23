// Все стримы, не только первый
document.querySelectorAll('.stream').forEach(img => {
  const overlay = img.closest('div').querySelector('.overlay');
  img.onload = () => {
    if (overlay) overlay.style.display = 'none';
  };
});

const consoleLog = document.getElementById('console-log');
const consoleQuadrant = document.getElementById('console-quadrant');

function log(s) {
  const now = new Date().toLocaleTimeString();
  consoleLog.textContent += `[${now}] ${s}\n`;
  
  // Оставляй только последние 100 строк
  const lines = consoleLog.textContent.split('\n');
  if (lines.length > 100) {
    consoleLog.textContent = lines.slice(-100).join('\n');
  }
  
  consoleQuadrant.scrollTop = consoleQuadrant.scrollHeight;
}

let running = false;

document.getElementById('toggle-btn').addEventListener('click', () => {
  running = !running;
  const btn = document.getElementById('toggle-btn');
  if (running) {
    btn.textContent = '■ STP';
    btn.style.background = 'red';
    log('START');
  } else {
    btn.textContent = '▶ STR';
    btn.style.background = 'green';
    log('STOP');
  }
});