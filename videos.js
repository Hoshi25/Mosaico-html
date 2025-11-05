document.addEventListener("DOMContentLoaded", function() {
  const rombos = document.querySelectorAll(".rombo");
  const rombo3 = rombos[2]; // Daniela
  const rombo4 = rombos[3]; // Santiago

  // Rutas de tus videos (ajústalas a tus nombres reales)
  const videos = {
    daniela: "daniela.mp4",
    santiago: "santiago.mp4"
  };

  // Función para abrir una ventana emergente con el video en pantalla completa
  function abrirVentana(videoSrc) {
    const nuevaVentana = window.open("", "_blank", "width=800,height=600,resizable=yes,scrollbars=no");

    if (nuevaVentana) {
      nuevaVentana.document.write(`
        <html>
        <head>
          <title>Video</title>
          <style>
            html, body {
              margin: 0;
              padding: 0;
              width: 100%;
              height: 100%;
              background: #000;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
            }
            video {
              height: 100vh;
              width: auto;
              object-fit: contain;
            }
          </style>
        </head>
        <body>
          <video src="${videoSrc}" autoplay muted playsinline></video>
          <script>
            const video = document.querySelector('video');
            // Intentar pantalla completa al cargar
            video.addEventListener('canplay', () => {
              if (video.requestFullscreen) {
                video.requestFullscreen();
              } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
              } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
              }
              video.play();
            });
          <\/script>
        </body>
        </html>
      `);
      nuevaVentana.document.close();
    } else {
      alert("Tu navegador bloqueó la ventana emergente. Permite popups para continuar.");
    }
  }

  // Asignar eventos de clic a los rombos
  rombo3.addEventListener("click", () => abrirVentana(videos.daniela));
  rombo4.addEventListener("click", () => abrirVentana(videos.santiago));
});
