import './style.scss';

// Slider.
const imgSlider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider img');

// Buttons.
const prevBtn = document.querySelector('#btn-prev');
const nextBtn = document.querySelector('#btn-next');

// Counter
let counter = 1;
const size = sliderImages[0].clientWidth;

imgSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
  if (counter >= sliderImages.length - 1) return;
  imgSlider.style.transition = 'transform 0.4s ease-in-out';
  counter += 1;
  imgSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  imgSlider.style.transition = 'transform 0.4s ease-in-out';
  counter -= 1;
  imgSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

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