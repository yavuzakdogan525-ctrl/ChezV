document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".bg-slide");
  let index = 0;

  if (!slides.length) return;

  setInterval(() => {
    slides.forEach(s => s.classList.remove("active"));
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3500);
});
