/*Esta es la libreria , se llama videojs, te deja adjuntar videos sin tener que programar demasiado y es sencillo */
var reproductor = videojs('fm-video', {
  fluid: true,
  controls: true,
  loop: false,
  preload: true,
});


/*Boton on/off para la musica del inicio, extrañamente se suele colgar pero despues de un click o dos funciona denuevo*/
const videoini = document.querySelector("#video_inicio")
const btn_silenciar = document.getElementById("btn-silenciar")


btn_silenciar.addEventListener('click', (e) => {
  if (e.target === btn_silenciar) {
    var videoini = document.getElementById("video_inicio");
    videoini.muted = !videoini.muted;

  }
})