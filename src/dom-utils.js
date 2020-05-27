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

  const clearCurrentClasses = (ele) => {
    domCLasses.forEach(element => {
      if (ele.classList.contains(element)) {
        ele.classList.remove(element);
      }
    });
  }
  
  return {
    active,
    deactive
  };
})();

export default Dom;