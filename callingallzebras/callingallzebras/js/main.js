document.addEventListener("DOMContentLoaded", () => {
  let heroIndex = 0;
  const heroSlides = document.querySelectorAll(".hero-slide");

  if (heroSlides.length === 0) return;

  function showHeroSlide(index) {
    heroSlides.forEach(slide => slide.classList.remove("active"));
    heroSlides[index].classList.add("active");
  }

  showHeroSlide(heroIndex);

  setInterval(() => {
    heroIndex = (heroIndex + 1) % heroSlides.length;
    showHeroSlide(heroIndex);
  }, 4000);
});
