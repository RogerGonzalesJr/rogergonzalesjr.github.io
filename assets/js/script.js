const mainPlayer = document.getElementById("mainPlayer");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach(thumb => {
  thumb.addEventListener("click", () => {
    const videoId = thumb.dataset.video;

    mainPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    // Optional: highlight active thumb
    thumbnails.forEach(t => t.classList.remove("active"));
    thumb.classList.add("active");
  });
});