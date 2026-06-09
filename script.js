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
const scrollContainer = document.querySelector(".video-scroll");

document.getElementById("leftBtn").addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: -300,
    behavior: "smooth"
  });
});

document.getElementById("rightBtn").addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: 300,
    behavior: "smooth"
  });
});
