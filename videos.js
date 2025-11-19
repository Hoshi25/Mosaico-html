document.addEventListener("DOMContentLoaded", function () {
  const rombos = document.querySelectorAll(".rombo");

  // Videos ordenados del 1 al 18
  const videos = {
    1: { archivo: "Dali_v.mp4", nombre: "Dali Gonzales (Programador de videojuegos)" },
    2: { archivo: "Daniela_v.mp4", nombre: "Daniela Beltran (Artista 3D en entornos/Animadora)" },
    3: { archivo: "Danna_v.mp4", nombre: "Danna Rojas (Artista conceptual de escenarios/props)" },
    4: { archivo: "Dustin_v.mp4", nombre: "Dustyn Perez (Programador en e-commerce)" },
    5: { archivo: "Ed_v.mp4", nombre: "Edward Garcia (Productor audiovisual y musical)" },
    6: { archivo: "Emily_v.mp4", nombre: "Emily Mora (Especialista en marketing audiovisual)" },
    7: { archivo: "Isabella_v.mp4", nombre: "Isabella Gallego (Artista 2d/FX)" },
    8: { archivo: "Juandavid_v.mp4", nombre: "David Fique (Productor audiovisual/Postproductor)" },
    9: { archivo: "Karen_v.mp4", nombre: "Karen Silva (Productora y diseñadora multimedia)" },
    10: { archivo: "Maria_v.mp4", nombre: "Maria Ocampo (Productora audiovisual)" },
    11: { archivo: "Mariap_v.mp4", nombre: "Maria Paula Lesmes (Productora Multimedia)." },
    12: { archivo: "Moreno_v.mp4", nombre: "Daniel Moreno (Posproductor/Animador 3D)" },
    13: { archivo: "Nicol_v.mp4", nombre: "Nicol Bolaños (Artista digital/tradicional)" },
    14: { archivo: "Nicolas_v.mp4", nombre: "Nicolás Acevedo (Productor audiovisual)" },
    15: { archivo: "Salamaca_v.mp4", nombre: "Video de Salamanca" },
    16: { archivo: "Santiago_v.mp4", nombre: "Santiago Bolaños (Modelador 3D/Especialista en render)" },
    17: { archivo: "Sofia_v.mp4", nombre: "Sofia Velandia (Desarrolladora de videojuegos/Animadora)" },
    18: { archivo: "Vera_v.mp4", nombre: "Juan Vera (Fotografo/Desarrollador de videojuegos)" }
  };

  // Abrir ventana nueva con título + video
  function abrirVentana(video, titulo) {
    const nuevaVentana = window.open("gei", "¿Cómo nos vemos en 5 años?", "width=800,height=600,resizable=yes");

    if (!nuevaVentana) {
      alert("⚠️ Tu navegador bloqueó la ventana emergente. Activa los popups.");
      return;
    }

    nuevaVentana.document.write(`
      <html>
      <head>
        <title>${titulo}</title>
        <style>
          body {
            margin: 0;
            background: #000;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
          }
          h1 {
            margin: 15px 0;
            font-size: 24px;
          }
          video {
            width: 100%;
            height: calc(100vh - 70px);
            object-fit: contain;
          }
        </style>
      </head>
      <body>
        <h1>${titulo}</h1>
        <video src="${video}" autoplay muted playsinline></video>
      </body>
      </html>
    `);
    nuevaVentana.document.close();
  }

  // Eventos de clic
  rombos.forEach((rombo, index) => {
    const numero = index + 1;

    if (videos[numero]) {
      rombo.addEventListener("click", () => {
        abrirVentana(videos[numero].archivo, videos[numero].nombre);
      });
    }
  });

});
