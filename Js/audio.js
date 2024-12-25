document.addEventListener('DOMContentLoaded', () => {
    const audioEfecto = document.getElementById('audioEfecto');
    
    // Intenta reproducir el audio cuando se cargue la página
    audioEfecto.play().catch((error) => {
      console.warn("El navegador bloqueó la reproducción automática. El audio se reproducirá al interactuar con la página.");
  
      // Agrega un evento de interacción para reproducir el audio
      const enableAudio = () => {
        audioEfecto.play().catch(console.error);
        document.removeEventListener('click', enableAudio); // Elimina el evento tras la interacción
      };
  
      // Espera un clic del usuario para desbloquear la reproducción
      document.addEventListener('click', enableAudio);
    });
  });

  

// Crear un elemento de audio global para la reproducción de música
let audio = new Audio();

// Función para manejar la reproducción de música
const playMusic = (musicUrl) => {
  // Si hay un audio reproduciéndose, detenerlo
  if (!audio.paused && !audio.ended) {
    audio.pause();
    audio.currentTime = 0; // Reiniciar el tiempo
  }

  // Configurar la nueva música y reproducirla
  audio.src = musicUrl;
  audio.play().catch((error) => console.error("Error reproduciendo el audio:", error));
};

// Asignar eventos a los botones
document.querySelectorAll(".gift-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const musicUrl = button.getAttribute("data-music"); // Obtener la URL de la música del atributo data-music

    if (musicUrl) {
      // Si el botón tiene un atributo de música, reproducir la música
      event.preventDefault(); // Evitar redirección
      playMusic(musicUrl);
    }
    // Si no tiene el atributo "data-music", permitir la navegación normal
  });
});
