import './style.scss';
import Dom from './dom-utils';
const thumbs = document.querySelectorAll('.thumbs');
const aryThumbs = [];
let idxCurrentThumb = null;
// Dom
const dom = Dom;
// Previous 
const prevBtn = document.getElementById('btn-prev');
// Next
const nextBtn = document.getElementById('btn-next');
let currentActive = null;
let nextActive = null;
let prevActive = null;

const start = (() => {
  thumbs.forEach(a => aryThumbs.push(a));
  const idxCurrentThumb = aryThumbs.findIndex((obj) => obj.classList.contains('th-active'));
  currentActive = idxCurrentThumb;
  nextActive = currentActive + 1;

  nextBtn.addEventListener('click', (e) => {
    if(currentActive == 2) {
      nextActive = 0;
    }
    else if(currentActive > 2) {
      currentActive = 0;
      nextActive = 1;
    }
    dom.rotateRight(aryThumbs[currentActive], aryThumbs[nextActive]);
    currentActive += 1;
    nextActive += 1;
  }, false, { once: true });

  prevBtn.addEventListener('click', (e) =>{
    if(currentActive == 0) {
      nextActive = 2;
    }
    else if (currentActive < 0) {
      currentActive = 2;
      nextActive = 1;
    }
    dom.rotateLeft(aryThumbs[currentActive], aryThumbs[nextActive]);
    currentActive -= 1;
    nextActive -= 1;
  }, false, { once: true });

})();