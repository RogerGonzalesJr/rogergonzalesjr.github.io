const player = document.getElementById("mainPlayer");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {
    const videoId = thumb.getAttribute("data-video");
    player.src = `https://www.youtube.com/embed/${videoId}`;
  });
});
``
