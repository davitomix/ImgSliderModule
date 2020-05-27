const ACTIVE = 'th-active';
const DEACTIVE = 'th-deactive';
const IN_RIGHT = 'th-r-in';
const IN_LEFT = 'th-l-in';
const OUT_RIGHT = 'th-r-out';
const OUT_LEFT = 'th-l-out';
const domCLasses = [ACTIVE, DEACTIVE, IN_RIGHT, IN_LEFT, OUT_RIGHT, OUT_LEFT];


const Dom = (() => {

  const active = (ele) => {
    clearCurrentClasses(ele)
    ele.classList.add(ACTIVE);
  }

  const deactive = (ele) => {
    clearCurrentClasses(ele);
    ele.classList.add(DEACTIVE);
  }

  const rotateRight = (current, next) => {
    next.classList.add(ACTIVE);
    next.classList.remove(DEACTIVE);
    current.classList.add(OUT_RIGHT);
    current.classList.remove(IN_RIGHT);
    next.classList.add(IN_RIGHT);
    setTimeout(() => {
      current.classList.remove(ACTIVE);
      current.classList.add(DEACTIVE);
      current.classList.remove(OUT_RIGHT);
    }, 1000);
  };

  const clearCurrentClasses = (ele) => {
    domCLasses.forEach(element => {
      if (ele.classList.contains(element)) {
        ele.classList.remove(element);
      }
    });
  }
  
  return {
    active,
    deactive,
    rotateRight
  };
})();

export default Dom;