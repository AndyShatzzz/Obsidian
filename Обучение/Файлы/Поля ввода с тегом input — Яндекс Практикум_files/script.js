let prevScrollpos = window.pageYOffset;
const menuHeight = parseFloat(getComputedStyle(document.querySelector('.header__nav')).height)
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
if(currentScrollPos >= menuHeight) {
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.header__nav').style.top = "0";
  } else {
    document.querySelector('.header__nav').style.top = "-3.3em";
  }
}
prevScrollpos = currentScrollPos;
}
