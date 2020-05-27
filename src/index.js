import './style.scss';
import Dom from './dom-utils';
const thumbs = document.querySelectorAll('.thumbs');
const aryThumbs = [];
let idxCurrentThumb = null;
// Dom
const dom = Dom;

//Next
const nextBtn = document.getElementById('btn-next');
let currentCount = 0;
let nextCount = 1;

const start = (() => {
  thumbs.forEach(a => aryThumbs.push(a));
  const idxCurrentThumb = aryThumbs.findIndex((obj) => obj.classList.contains('th-active'));
  
  nextBtn.addEventListener('click', (e) => {
    dom.deactive(aryThumbs[currentCount]);
    dom.active(aryThumbs[nextCount]);
    currentCount += 1;
    nextCount += 1;
    if(currentCount > 2) {
      currentCount = 0;
      nextCount = 1;
    }
    if(currentCount == 2) {
      nextCount = 0;
    }
  });
})();