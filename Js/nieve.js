const snowContainer = document.getElementById('snow-container');

// Función para crear copos de nieve
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  // Tamaño y posición aleatorios
  const size = Math.random() * 15 + 5; // Tamaño entre 5px y 20px
  const left = Math.random() * 100; // Posición horizontal entre 0% y 100%
  const duration = Math.random() * 5 + 5; // Duración de caída entre 5s y 10s

  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  snowflake.style.left = `${left}%`;
  snowflake.style.animationDuration = `${duration}s`;

  snowContainer.appendChild(snowflake);

  // Eliminar el copo cuando termine la animación
  setTimeout(() => {
    snowflake.remove();
  }, duration * 1000);
}

// Generar copos de nieve continuamente
setInterval(createSnowflake, 100);

// Dispersar copos de nieve al pasar el cursor
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const snowflake = document.elementFromPoint(x, y);
  if (snowflake && snowflake.classList.contains('snowflake')) {
    snowflake.classList.add('snow-disperse');
    snowflake.addEventListener('animationend', () => {
      snowflake.remove();
    });
  }
});
