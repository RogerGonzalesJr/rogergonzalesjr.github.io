// Video thumbnail click handler
document.querySelectorAll(".thumb").forEach(t => {
  t.addEventListener("click", () => {
    const id = t.getAttribute("data-video");
    document.getElementById("mainPlayer").src =
      `https://www.youtube.com/embed/${id}`;
  });
});
