document.addEventListener("DOMContentLoaded", function () {
  const rombos = document.querySelectorAll(".rombo");

  // Ruta de los videos: si los tienes en una carpeta "videos/", pon "videos/Nombre.mp4"

  const videos = {
  1: {
    archivo: "Videos/VideoDalix2.mp4",
    audio: "Audios/Dali.mp3",
    nombre: "｡.｡✧Dali Gonzales (Programador de videojuegos)✧｡.｡"
  },
  2: {
    archivo: "Videos/VideoDanielax2.mp4",
    audio: "Audios/Daniela.mp3",
    nombre: "｡.｡✧Daniela Beltran (Artista 3D / Animadora)✧｡.｡"
  },
   3: {
    archivo: "Videos/VideoDannax2.mp4",
    audio: "Audios/Daniela.mp3",
    nombre: "｡.｡✧Danna Rojas (Artista concept-escenarios/props)✧｡.｡"
  },
   4: {
    archivo: "Videos/VideoDustynx2.mp4",
    audio: "Audios/Daniela.mp3",
    nombre: "｡.｡✧Dustyn Perez (Programador en e-commerce)✧｡.｡"
  },
   5: {
    archivo: "Videos/EdwardVideox2.mp4",
    audio: "Audios/Daniela.mp3",
    nombre: "｡.｡✧Edward Garcia (Productor audiovisual/musical)✧｡.｡"
  },
   6: {
    archivo: "Videos/VideoEmilyx2.mp4",
    audio: "Audios/Daniela.mp3",
    nombre: "｡.｡✧Emily Mora (Especialista marketing audiovisual)✧｡.｡"
  },
   7: {
    archivo: "Videos/VideoIsabellax2.mp4",
    audio: "Audios/Daniela.mp3",
    nombre: "｡.｡✧Isabella Gallego (Artista 2d/FX)✧｡.｡"
  },
   8: {
    archivo: "Videos/VideoFiquex2.mp4",
    audio: "Audios/Daniela.mp3",
    nombre: "｡.｡✧David Fique (Post/Productor audiovisual)✧｡.｡"
  },
   9: {
    archivo: "Videos/VideoKarenx2.mp4",
    audio: "Audios/Daniela.mp3",
    nombre: "｡.｡✧Karen Silva (Productora/diseñadora multimedia)✧｡.｡"
  },
   10: {
    archivo: "Videos/VideoMariax2.mp4",
    audio: "Audios/Daniela.mp3",
    nombre: "｡.｡✧Maria Ocampo (Productora audiovisual)✧｡.｡"
  },
   11: {
    archivo: "Videos/VideoMariapx2.mp4",
    audio: "Audios/Daniela.mp3",
    nombre: "｡.｡✧Maria Paula Lesmes (Productora Multimedia)✧｡.｡"
  },
   12: {
    archivo: "Videos/VideoDanielx2.mp4",
    audio: "Audios/Daniela.mp3",
    nombre: "｡.｡✧Daniel Moreno (Posproductor/Animador 3D)✧｡.｡"
  },
   13: {
    archivo: "Videos/NicolVideox2.mp4",
    audio: "Audios/Daniela.mp3",
    nombre: "｡.｡✧Nicol Bolaños (Artista digital/animadora 3D)✧｡.｡"
  },
   14: {
    archivo: "Videos/VideoNicolasx2.mp4",
    audio: "Audios/Daniela.mp3",
    nombre: "｡.｡✧Nicolás Acevedo (Productor audiovisual)✧｡.｡"
  },
   15: {
    archivo: "Videos/VideoFelipex2.mp4",
    audio: "Audios/Daniela.mp3",
    nombre: "｡.｡✧Felipe Salamanca (Productor/director de cine)✧｡.｡"
  },
   16: {
    archivo: "Videos/VideoSantiagox2.mp4",
    audio: "Audios/Daniela.mp3",
    nombre: "｡.｡✧Santiago Bolaños (Modelador 3D/Esp-render)✧｡.｡"
  },
   17: {
    archivo: "Videos/VideoSofiax2.mp4",
    audio: "Audios/Daniela.mp3",
    nombre: "｡.｡✧Sofia Velandia (Desarrollo-juegos/Animadora)✧｡.｡"
  },
   18: {
    archivo: "Videos/VideoVerax2.mp4",
    audio: "Audios/Daniela.mp3",
    nombre: "｡.｡✧Juan Vera (Fotografo/Desarrollo-juegos)✧｡.｡"
  },
};

  const modal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");
  const videoNombre = document.getElementById("videoNombre");
  const audioPlayer = document.getElementById("audioPlayer");
  const cerrarBtn = document.querySelector(".cerrar");

 function abrirModal(src, titulo, audioSrc) {
  if (!videoPlayer || !videoNombre) return;

  // VIDEO
  videoPlayer.src = src;
  videoNombre.textContent = titulo || "";

  // AUDIO 👇 (esto es lo nuevo)
  if (audioSrc && audioPlayer) {
    audioPlayer.pause();
    audioPlayer.src = audioSrc;
    audioPlayer.currentTime = 0;
    audioPlayer.load();
    audioPlayer.play().catch(err => {
      console.warn("Audio bloqueado:", err);
    });
  }

  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");

  videoPlayer.load();
  videoPlayer.play().catch(() => {});
}

  

  function cerrarModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");

    // pausar y quitar fuente
    try {
      videoPlayer.pause();
      videoPlayer.removeAttribute("src");
      videoPlayer.load();
    } catch (e) {
      console.warn("Error limpiando el video:", e);
    }
    // limpiar texto
    if (videoNombre) videoNombre.textContent = "";
  }

  if (cerrarBtn) {
    cerrarBtn.addEventListener("click", cerrarModal);
  } else {
    console.warn("Botón cerrar no encontrado.");
  }

  // cerrar si clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === modal) cerrarModal();
  });

  // asignar eventos a rombos (orden = DOM order)
  rombos.forEach((rombo, i) => {
    const numero = i + 1;
    if (videos[numero]) {
      rombo.style.cursor = "pointer";
      rombo.addEventListener("click", () => {
        abrirModal(videos[numero].archivo, videos[numero].nombre);
      });
    }
  });
});