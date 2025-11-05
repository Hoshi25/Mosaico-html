// Lista de videos disponibles (solo los que realmente tengas)
const videos = {
  0: 'videos/video1.mp4',
  1: 'videos/video2.mp4',
  2: 'videos/video3.mp4',
  3: 'videos/video4.mp4',
  4: 'videos/video5.mp4',
  5: 'videos/video6.mp4',
  6: 'videos/video7.mp4',
  7: 'videos/video8.mp4',
  8: 'videos/video9.mp4',
  9: 'videos/video10.mp4',
  10: 'videos/video11.mp4',
  11: 'videos/video12.mp4',
  12: 'videos/video13.mp4',
  13: 'videos/video14.mp4',
  14: 'videos/video15.mp4',
  15: 'videos/video16.mp4',
  16: 'videos/video17.mp4',
  17: 'videos/video18.mp4',
  18: 'videos/video19.mp4',
  19: 'videos/video20.mp4',
  20: 'videos/video21.mp4'
};

const modal = document.getElementById('videoModal');
const player = document.getElementById('videoPlayer');
const cerrar = document.querySelector('.cerrar');

// Crear lista de rombos con imagen
const rombos = Array.from(document.querySelectorAll('.rombo')).filter(r => r.querySelector('img'));

rombos.forEach((rombo, index) => {
  rombo.addEventListener('click', () => {
    // Crear orden de reproducción circular desde el rombo clickeado
    const order = [];
    for (let i = 0; i < rombos.length; i++) {
      let j = (index + i) % rombos.length;
      if (videos[j]) order.push(videos[j]);
    }
    if(order.length > 0) playVideos(order);
  });
});

function playVideos(order) {
  let i = 0;
  modal.style.display = 'block';
  player.src = order[i];
  player.play();

  player.onended = function() {
    i++;
    if (i < order.length) {
      player.src = order[i];
      player.play();
    } else {
      modal.style.display = 'none';
      player.src = '';
    }
  };
}

// Cerrar modal
cerrar.onclick = function() {
  modal.style.display = 'none';
  player.pause();
  player.src = '';
};

// Cerrar al hacer click fuera del modal
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    player.pause();
    player.src = '';
  }
};

