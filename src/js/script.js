import { BASE_DIR } from '../constants.yml'

const kashikanTop = document.querySelector(".kashikan-top");

let mouseWheel;
if ('onwheel' in document) {
    mouseWheel = 'wheel';
} else if ('onmousewheel' in document) {
    mouseWheel = 'mousewheel';
} else {
    mouseWheel = 'DOMMouseScroll';
}

window.addEventListener('ontouchmove' in window ? 'touchmove' : mouseWheel, () => {
    if(window.pageYOffset >= 200) {
        kashikanTop.setAttribute("data-is-active", true);
    }else {
        kashikanTop.setAttribute("data-is-active", false);
    }
}, { passive: true });
