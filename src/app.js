const audio = document.getElementById("audio");
const playPause = document.getElementById("play");

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".btn-pausa").classList.toggle("esconder");
    playPause.querySelector(".btn-play").classList.toggle("esconder");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".btn-pausa").classList.toggle("esconder");
    playPause.querySelector(".btn-play").classList.toggle("esconder");
  }
});