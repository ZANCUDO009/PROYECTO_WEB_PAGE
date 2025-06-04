document.addEventListener("DOMContentLoaded", () => {
  const musica = document.getElementById("bg-music");
  const musicToggle = document.getElementById("music-toggle");
  const toggleButton = document.getElementById("music-toggle-btn");

  if (!musica || !musicToggle || !toggleButton) return;

  let reproduciendo = false;

  toggleButton.addEventListener("click", async () => {
    try {
      if (!reproduciendo) {
        musica.muted = false; // Quitar silencio para permitir reproducción
        await musica.play();
        musicToggle.src = "/img/pause.png";
        reproduciendo = true;
      } else {
        musica.pause();
        musicToggle.src = "/img/play.png";
        reproduciendo = false;
      }
    } catch (error) {
      console.error("Error al reproducir la música:", error);
    }
  });
});

