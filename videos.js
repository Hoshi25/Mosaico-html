document.addEventListener("DOMContentLoaded", function() {
  const rombos = document.querySelectorAll(".rombo");

  // Orden exacto del 1 al 21 según tu lista
  const videos = {
<<<<<<< Updated upstream
    1: "nicolas_v.mp4",
    2: "", // sin video
    3: "Daniela_v.mp4",
    4: "Santiago_v.mp4",
    5: "Juandavid_v.mp4",
    6: "Isabella_v.mp4",
    7: "Ed_v.mp4",
    8: "", // sin video
    9: "Mariap_v.mp4",
    10: "Emy_v.mp4",
    11: "Moreno_v.mp4",
    12: "Maria_v.mp4",
    13: "Dustin_v.mp4",
    14: "", // sin video
    15: "Danna_v.mp4",
    16: "Salamanca_v.mp4",
    17: "Karen_v.mp4",
    18: "Nicol_v.mp4",
    19: "Sofia_v.mp4",
    20: "Vera_v.mp4",
    21: "" // sin video
=======
    1: "videos/nicolas_v.mp4",
    2: "", // sin video
    3: "videos/Daniela_v.mp4",
    4: "videos/Santiago_v.mp4",
    5: "", // sin video
    6: "videos/Juandavid_v.mp4",
    7: "videos/Isabella_v.mp4",
    8: "videos/Ed_v.mp4",
    9: "", // sin video
    10: "videos/Mariap_v.mp4",
    11: "videos/Emy_v.mp4",
    12: "videos/Moreno_v.mp4",
    13: "videos/Maria_v.mp4",
    14: "videos/Dustin_v.mp4",
    15: "", // sin video
    16: "videos/Danna_v.mp4",
    17: "videos/Salamanca_v.mp4",
    18: "videos/Karen_v.mp4",
    19: "videos/Nicol_v.mp4",
    20: "videos/Sofia_v.mp4",
    21: "videos/Vera_v.mp4",
>>>>>>> Stashed changes
  };

  // Función que abre la ventana emergente y reproduce el video automáticamente
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
          <video id="video" src="${videoSrc}" autoplay muted playsinline></video>
          <script>
            const video = document.getElementById('video');
            
            // Forzar reproducción automática
            video.play().catch(() => {
              // Si falla el autoplay, intentar reproducir de nuevo después de un pequeño retardo
              setTimeout(() => video.play().catch(() => {}), 500);
            });

            // Cerrar la ventana automáticamente después de 12 segundos
            setTimeout(() => {
              window.close();
            }, 12000);
          <\/script>
        </body>
        </html>
      `);
      nuevaVentana.document.close();
    } else {
      alert("⚠️ Tu navegador bloqueó la ventana emergente. Permite popups para continuar.");
    }
  }

  // Asignar eventos de clic a los rombos
  rombos.forEach((rombo, index) => {
    const numero = index + 1;
    if (videos[numero] && videos[numero] !== "") {
      rombo.addEventListener("click", () => abrirVentana(videos[numero]));
    }
  });
});
