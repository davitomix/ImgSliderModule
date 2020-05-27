const ACTIVE = 'th-active';
const DEACTIVE = 'th-deactive';
const IN_RIGHT = 'th-r-in';
const IN_LEFT = 'th-l-in';
// Future implementations below.
const OUT_RIGHT = 'th-r-out';
const OUT_LEFT = 'th-l-out';

const Dom = (() => {
  const rotateRight = (current, next) => {
    next.classList.add(ACTIVE);
    next.classList.remove(DEACTIVE);
    if (current.classList.contains(IN_RIGHT) && current.classList.contains(IN_LEFT)) {
      current.classList.remove(IN_RIGHT);
      current.classList.remove(IN_LEFT);
      next.classList.add(IN_RIGHT);
    }
    else {
      next.classList.add(IN_RIGHT);
    }
    current.classList.remove(ACTIVE);
    current.classList.add(DEACTIVE);
  };

  const rotateLeft = (current, next) => {
    next.classList.add(ACTIVE);
    next.classList.remove(DEACTIVE);
    if (current.classList.contains(IN_LEFT)) {
      current.classList.remove(IN_LEFT);
      next.classList.add(IN_LEFT);
    }
    else {
      next.classList.add(IN_LEFT);
    }
    current.classList.remove(ACTIVE);
    current.classList.add(DEACTIVE);
  };
  
  return {
    rotateRight,
    rotateLeft
  };
})();

export default Dom;