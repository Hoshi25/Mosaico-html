document.addEventListener("DOMContentLoaded", function() {

  // 🔹 Obtener todos los rombos por ID
  const rombo1 = document.getElementById("rombo1");
  const rombo2 = document.getElementById("rombo2");
  const rombo3 = document.getElementById("rombo3");
  const rombo4 = document.getElementById("rombo4");
  const rombo5 = document.getElementById("rombo5");
  const rombo6 = document.getElementById("rombo6");
  const rombo7 = document.getElementById("rombo7");
  const rombo8 = document.getElementById("rombo8");
  const rombo9 = document.getElementById("rombo9");
  const rombo10 = document.getElementById("rombo10");
  const rombo11 = document.getElementById("rombo11");
  const rombo12 = document.getElementById("rombo12");
  const rombo13 = document.getElementById("rombo13");
  const rombo14 = document.getElementById("rombo14");
  const rombo15 = document.getElementById("rombo15");
  const rombo16 = document.getElementById("rombo16");
  const rombo17 = document.getElementById("rombo17");
  const rombo18 = document.getElementById("rombo18");
  const rombo19 = document.getElementById("rombo19");
  const rombo20 = document.getElementById("rombo20");
  const rombo21 = document.getElementById("rombo21");


  // Rutas de tus videos
  const videos = {
    Angie: "videos/VideoAngie.mp4",
    Dali: "videos/VideoDalix2.mp4",
    Dana: "videos/VideoDannax2.mp4",
    Daniela: "videos/VideoDanielax2.mp4",
    Dustyn: "videos/VideoDustynx2.mp4",
    ed: "videos/EdwardVideox2.mp4",
    Emily: "videos/VideoEmilyx2.mp4",
    isabela: "videos/VideoIsabellax2.mp4",
    Fique: "videos/VideoFiquex2.mp4",
    Karen: "videos/VideoKarenx2.mp4",
    Maria_Paula: "videos/VideoMariaPx2.mp4",
    Maria: "videos/VideoMariax2.mp4",
    Moreno: "videos/VideoDanielx2.mp4",
    Nicol: "videos/NicolVideox2.mp4",
    nicolas: "videos/VideoNicolasx2.mp4",
    Samuel: "Videos/VideoSamuelx2.mp4",
    Salamanca: "videos/VideoFelipex2.mp4",
    Santiago: "videos/VideoSantiagox2.mp4",
    Simon: "videos/VideoSimónx2.mp4",
    Sofia_Velandia: "videos/VideoSofiax2.mp4",
    Vera: "videos/VideoVerax2.mp4"

  };

  // Referencias al modal
  const modal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");
  const cerrarBtn = document.querySelector(".cerrar");

  // Función para abrir el modal y reproducir el video
  function abrirPopup(videoSrc) {
    videoPlayer.src = videoSrc;
    modal.style.display = "flex"; // Mostrar el modal
    videoPlayer.play();
  }

  // Cerrar el modal
  function cerrarPopup() {
    modal.style.display = "none";
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }

  // Clic en el botón de cerrar
  cerrarBtn.addEventListener("click", cerrarPopup);
  // cerrar con botón
  btnCerrarVideo.addEventListener("click", cerrarPopup); // ✅ cerrar con botón

  // Clic fuera del video para cerrar
  modal.addEventListener("click", function(e) { 
    if (e.target === modal) {
      cerrarPopup();
    }
  });

  // Asignar eventos de clic a los rombos
  rombo1.addEventListener("click", () => abrirPopup(videos.Angie));
  rombo2.addEventListener("click", () => abrirPopup(videos.Dali));
  rombo3.addEventListener("click", () => abrirPopup(videos.Dana));
  rombo4.addEventListener("click", () => abrirPopup(videos.Daniela));
  rombo5.addEventListener("click", () => abrirPopup(videos.Dustyn));
  rombo6.addEventListener("click", () => abrirPopup(videos.ed));
  rombo7.addEventListener("click", () => abrirPopup(videos.Emily));
  rombo8.addEventListener("click", () => abrirPopup(videos.Salamanca));
  rombo9.addEventListener("click", () => abrirPopup(videos.isabela));
  rombo10.addEventListener("click", () => abrirPopup(videos.Moreno));
  rombo11.addEventListener("click", () => abrirPopup(videos.Fique));
  rombo12.addEventListener("click", () => abrirPopup(videos.Karen));
  rombo13.addEventListener("click", () => abrirPopup(videos.Maria_Paula));
  rombo14.addEventListener("click", () => abrirPopup(videos.Maria));
  rombo15.addEventListener("click", () => abrirPopup(videos.nicolas));
  rombo16.addEventListener("click", () => abrirPopup(videos.Nicol));
  rombo17.addEventListener("click", () => abrirPopup(videos.Samuel));
  rombo18.addEventListener("click", () => abrirPopup(videos.Santiago));
  rombo19.addEventListener("click", () => abrirPopup(videos.Simon));
  rombo20.addEventListener("click", () => abrirPopup(videos.Sofia_Velandia));
});
  