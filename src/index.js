import './style.scss';

// Slider.
const imgSlider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider img');

// Buttons.
const prevBtn = document.querySelector('#btn-prev');
const nextBtn = document.querySelector('#btn-next');

// Slide Buttons
const sliderButtons = document.querySelectorAll('.dots button');

// Counter
let counter = 1;
const size = sliderImages[0].clientWidth;

imgSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (counter >= sliderImages.length - 1) return;
  imgSlider.style.transition = 'transform 0.4s ease-in-out';
  counter += 1;
  imgSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
}, false, { once: true });

prevBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (counter <= 0) return;
  imgSlider.style.transition = 'transform 0.4s ease-in-out';
  counter -= 1;
  imgSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
}, false, { once: true });

imgSlider.addEventListener('transitionend', () => {
  if (sliderImages[counter].id === 'lastClone') {
    imgSlider.style.transition = 'none';
    counter = sliderImages.length - 2;
    imgSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (sliderImages[counter].id === 'firstClone') {
    imgSlider.style.transition = 'none';
    counter = sliderImages.length - counter;
    imgSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

for (const element in sliderButtons) {
  if(typeof(sliderButtons[element]) === 'number') break;
  sliderButtons[element].addEventListener('click', (e) => {
    imgSlider.style.transition = 'transform 0.4s ease-in-out';
    counter = parseInt(element) + 1;
    imgSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  });
}