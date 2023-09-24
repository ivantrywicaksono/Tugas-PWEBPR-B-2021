const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

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
}

leftBtn.addEventListener('click', () => {
  plusSlide(-1);
});

rightBtn.addEventListener('click', () => {
  plusSlide(1);
});
