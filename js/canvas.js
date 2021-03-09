document.addEventListener('DOMContentLoaded', (event) => {
  //the DOM is ready, we can do what we want!
  console.log('DOM loaded');
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  let rover = {
    x: 0,
    y: 480,
  };

  let enemy = {
    x: 40,
    y: 0,
  };

  function drawPlayer() {
    ctx.fillStyle = 'red';
    ctx.fillRect(rover.x, rover.y, 20, 20);
  }

  function drawEnemy() {
    ctx.fillStyle = 'green';
    ctx.fillRect(enemy.x, enemy.y, 20, 20);
  }

  function moveEnemy() {
    enemy.y = enemy.y + 10;
  }

  function cleanKH7() {
    ctx.clearRect(0, 0, 500, 500);
  }

  function checkCollision() {
    if (enemy.y + 20 >= rover.y && enemy.y + 20 <= rover.y + 20) {
      console.log('crash');
    }
  }

  function update() {
    cleanKH7();
    drawPlayer();
    drawEnemy();
    checkCollision();
    window.requestAnimationFrame(update);
  }

  document.addEventListener('keydown', function (key) {
    console.log(key.code);
    switch (key.code) {
      case 'ArrowLeft':
        rover.x = (rover.x - 22 + 500) % 500;
        break;
      case 'ArrowRight':
        rover.x = (rover.x + 22) % 500;
        break;
      case 'ArrowDown':
        rover.y = rover.y + 22;
        break;
      case 'ArrowUp':
        rover.y = rover.y - 22;
        break;
      default:
        break;
    }
  });

  setInterval(moveEnemy, 800);

  window.requestAnimationFrame(update);
});
