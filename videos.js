document.addEventListener("DOMContentLoaded", function () {
  const rombos = document.querySelectorAll(".rombo");

  // Ruta de los videos: si los tienes en una carpeta "videos/", pon "videos/Nombre.mp4"
  const videos = {
    1: { archivo: "Videos/VideoDalix2.mp4", nombre: "｡.｡✧Dali Gonzales (Programador de videojuegos)✧｡.｡" },
    2: { archivo: "Videos/VideoDanielax2.mp4", nombre: "｡.｡✧Daniela Beltran (Artista3D-entornos/Animadora)✧｡.｡" },
    3: { archivo: "Videos/VideoDannax2.mp4", nombre: "｡.｡✧Danna Rojas (Artista concept-escenarios/props)✧｡.｡" },
    4: { archivo: "Videos/VideoDustynx2.mp4", nombre: "｡.｡✧Dustyn Perez (Programador en e-commerce)✧｡.｡" },
    5: { archivo: "Videos/EdwardVideox2.mp4", nombre: "｡.｡✧Edward Garcia (Productor audiovisual/musical)✧｡.｡" },
    6: { archivo: "Videos/VideoEmilyx2.mp4", nombre: "｡.｡✧Emily Mora (Especialista marketing audiovisual)✧｡.｡" },
    7: { archivo: "Videos/VideoIsabellax2.mp4", nombre: "｡.｡✧Isabella Gallego (Artista 2d/FX)✧｡.｡" },
    8: { archivo: "Videos/VideoFiquex2.mp4", nombre: "｡.｡✧David Fique (Post/Productor audiovisual)✧｡.｡" },
    9: { archivo: "Videos/VideoKarenx2.mp4", nombre: "｡.｡✧Karen Silva (Productora/diseñadora multimedia)✧｡.｡" },
    10: { archivo: "Videos/VideoMariax2.mp4", nombre: "｡.｡✧Maria Ocampo (Productora audiovisual)✧｡.｡" },
    11: { archivo: "Videos/VideoMariapx2.mp4", nombre: "｡.｡✧Maria Paula Lesmes (Productora Multimedia)✧｡.｡" },
    12: { archivo: "Videos/VideoDanielx2.mp4", nombre: "｡.｡✧Daniel Moreno (Posproductor/Animador 3D)✧｡.｡" },
    13: { archivo: "Videos/NicolVideox2.mp4", nombre: "｡.｡✧Nicol Bolaños (Artista digital/tradicional)✧｡.｡" },
    14: { archivo: "Videos/VideoNicolasx2.mp4", nombre: "｡.｡✧Nicolás Acevedo (Productor audiovisual)✧｡.｡" },
    15: { archivo: "Videos/VideoFelipex2.mp4", nombre: "｡.｡✧Felipe Salamanca (Productor/director de cine)✧｡.｡" },
    16: { archivo: "Videos/VideoSantiagox2.mp4", nombre: "｡.｡✧Santiago Bolaños (Modelador 3D/Esp-render)✧｡.｡" },
    17: { archivo: "Videos/VideoSofiax2.mp4", nombre: "｡.｡✧Sofia Velandia (Desarrollo-juegos/Animadora)✧｡.｡" },
    18: { archivo: "Videos/VideoVerax2.mp4", nombre: "｡.｡✧Juan Vera (Fotografo/Desarrollo-juegos)✧｡.｡" }
  };

  const modal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");
  const videoNombre = document.getElementById("videoNombre");
  const cerrarBtn = document.querySelector(".cerrar");

  function abrirModal(src, titulo) {
    // seguridad: verificar que exista el elemento
    if (!videoPlayer || !videoNombre) {
      console.error("Elementos del modal faltan en el HTML.");
      return;
    }

    // setear fuente y título
    videoPlayer.src = src;
    videoNombre.textContent = titulo || "";

    // mostrar modal
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");

    // intentar reproducir
    videoPlayer.load();
    videoPlayer.play().catch(err => {
      // si falla autoplay por políticas, no es fatal; dejamos controls para que el usuario inicie
      console.warn("Autoplay falló:", err);
    });
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