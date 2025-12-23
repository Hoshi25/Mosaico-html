const bgMusic = document.getElementById("bgMusic");
let musicaActiva = false;

function activarMusica() {
  if (!musicaActiva) {
    bgMusic.volume = 0.4;
    bgMusic.play().catch(()=>{});
    musicaActiva = true;
  }
}

// 👇 PRIMER clic en la página (NO en el rombo)
document.addEventListener("click", activarMusica, { once: true });

document.addEventListener("DOMContentLoaded", () => {

  const rombos = document.querySelectorAll(".rombo");

  
  const videos = {
    1:{ archivo:"Videos/VideoDalix2.mp4", nombre:"｡.｡✧Dali Gonzales (Programador de videojuegos)✧｡.｡"},
    2:{ archivo:"Videos/VideoDanielax2.mp4", nombre:"｡.｡✧Daniela Beltran (Artista 3D / Animadora)✧｡.｡"},
    3:{ archivo:"Videos/VideoDannax2.mp4", nombre:"｡.｡✧Danna Rojas (Artista concept-escenarios/props)✧｡.｡"},
    4:{ archivo:"Videos/VideoDustynx2.mp4", nombre:"｡.｡✧Dustyn Perez (Programador e-commerce)✧｡.｡"},
    5:{ archivo:"Videos/EdwardVideox2.mp4", nombre:"｡.｡✧Edward Garcia (Productor audiovisual/musical)✧｡.｡"},
    6:{ archivo:"Videos/VideoEmilyx2.mp4", nombre:"｡.｡✧Emily Mora (Marketing audiovisual)✧｡.｡"},
    7:{ archivo:"Videos/VideoIsabellaxd.mp4", nombre:"｡.｡✧Isabella Gallego (Artista 2D / FX)✧｡.｡"},
    8:{ archivo:"Videos/VideoFiquex2.mp4", nombre:"｡.｡✧David Fique (Post/Productor audiovisual)✧｡.｡"},
    9:{ archivo:"Videos/VideoKarenx2.mp4", nombre:"｡.｡✧Karen Silva (Productora multimedia)✧｡.｡"},
    10:{ archivo:"Videos/VideoMariax2.mp4", nombre:"｡.｡✧Maria Ocampo (Productora audiovisual)✧｡.｡"},
    11:{ archivo:"Videos/VideoMariapx2.mp4", nombre:"｡.｡✧Maria Paula Lesmes (Productora Multimedia)✧｡.｡"},
    12:{ archivo:"Videos/VideoDanielx2.mp4", nombre:"｡.｡✧Daniel Moreno (Post/Animador 3D)✧｡.｡"},
    13:{ archivo:"Videos/VideoNicolxd.mp4", nombre:"｡.｡✧Nicol Bolaños (Artista digital / Animadora 3D)✧｡.｡"},
    14:{ archivo:"Videos/VideoNicolasx2.mp4", nombre:"｡.｡✧Nicolás Acevedo (Productor audiovisual)✧｡.｡"},
    15:{ archivo:"Videos/VideoFelipex2.mp4", nombre:"｡.｡✧Felipe Salamanca (Director de cine)✧｡.｡"},
    16:{ archivo:"Videos/VideoSantiagox2.mp4", nombre:"｡.｡✧Santiago Bolaños (Modelador 3D)✧｡.｡"},
    17:{ archivo:"Videos/VideoSofiax2.mp4", nombre:"｡.｡✧Sofia Velandia (Desarrollo de juegos)✧｡.｡"},
    18:{ archivo:"Videos/VideoVerax2.mp4", nombre:"｡.｡✧Juan Vera (Fotografía / Juegos)✧｡.｡"}
  };

  const modal = document.getElementById("videoModal");
  const video = document.getElementById("videoPlayer");
  const nombre = document.getElementById("videoNombre");
  const cerrar = document.querySelector(".cerrar");
  const bgMusic = document.getElementById("bgMusic");

  let musicaIniciada = false;

  function iniciarMusica() {
    if (!musicaIniciada) {
      bgMusic.volume = 0.4;
      bgMusic.play().catch(()=>{});
      musicaIniciada = true;
    }
  }
  
function abrirModal(data) {
  nombre.textContent = data.nombre;

  video.src = data.archivo;
  video.currentTime = 0;
  video.load();

  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");

  video.play().catch(()=>{});
}


  function cerrarModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");

    video.pause();
    video.removeAttribute("src");
  }

  cerrar.addEventListener("click", cerrarModal);

  window.addEventListener("click", e => {
    if (e.target === modal) cerrarModal();
  });

  rombos.forEach((rombo, i) => {
    const data = videos[i + 1];
    if (!data) return;

    rombo.style.cursor = "pointer";
    rombo.addEventListener("click", () => abrirModal(data));
  });

});
