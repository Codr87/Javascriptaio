const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let position = 0;
let styletop = 0;

function handleKeyPress(e) {
  if (e.code === 'ArrowLeft') {
    position = position - 50;
  }
  if (e.code === 'ArrowRight') {
    position = position + 50;
  }
  if (e.code === 'ArrowUp') {
    styletop = styletop - 20;
  }
  if (e.code === 'ArrowDown') {
    styletop = styletop + 20;
  }
  if (position < 0) {
    position = 0;
  } 
  if (position > 1225) {
    position = 1225;
  }
  if (styletop < 0) {
    styletop = 0;
  }
  if (styletop > 560) {
    styletop = 560;
  }
    refresh();
}

function refresh() {
    ball.style.top = styletop + 'px';
    ball.style.left = position + 'px';
}