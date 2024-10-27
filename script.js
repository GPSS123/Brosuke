document.addEventListener("click", function() {
  const music = document.getElementById("background-music");
  if (music.paused) {
      music.play(); // Play music on the first click
  }
}, { once: true });