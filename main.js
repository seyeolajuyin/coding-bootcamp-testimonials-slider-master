const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelector(".slide");

function nextSlide() {
  slides.array.forEach((slide) => {
    slide.style.display = "none";
  });
}

next.addEventListener("click", nextSlide);
