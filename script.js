const canvas = document.getElementById('canvasFotosintesis');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 300;

// Coordenadas del fotón
let photonX = 450;
let photonY = 50;

function dibujar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Sol (círculo amarillo)
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(450, 50, 30, 0, Math.PI * 2);
  ctx.fill();

  // Hoja (óvalo verde con nervadura)
  ctx.fillStyle = 'green';
  ctx.beginPath();
  ctx.ellipse(250, 220, 60, 30, 0, 0, Math.PI * 2);
  ctx.fill();

  // Nervadura central de la hoja
  ctx.strokeStyle = 'darkgreen';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(250, 190);
  ctx.lineTo(250, 250);
  ctx.stroke();

  // Fotón (cuadro anaranjado moviéndose desde el sol a la hoja)
  ctx.fillStyle = 'orange';
  ctx.fillRect(photonX, photonY, 10, 10);

  // Movimiento en diagonal hacia la hoja
  if (photonX > 250) photonX -= 2;
  if (photonY < 220) photonY += 1.2;

  // Reset del fotón al llegar a la hoja
  if (photonX <= 250 && photonY >= 220) {
    photonX = 450;
    photonY = 50;
  }

  requestAnimationFrame(dibujar);
}

dibujar();
