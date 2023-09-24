const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

const programSlider = document.querySelector('#projects-list');

const lastCardIdx = 2;
const cardSize = 340;

let slideIndex = 0;

function plusSlide(n) {
  // 308 + 32 (px)
  slideIndex += n;

  if (slideIndex <= 0) slideIndex = 0;
  else if (slideIndex >= lastCardIdx) slideIndex = lastCardIdx;

  let x = slideIndex * -cardSize;
  programSlider.style.transform = `translateX(${x}px)`;
  console.log(slideIndex);
}
