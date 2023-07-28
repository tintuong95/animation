(function (window) {
  //IMPORT LIBRARIES GLOBAL
  const { gsap, MotionPathPlugin } = require("gsap/all");
  gsap.registerPlugin(MotionPathPlugin);

  window.gsap = gsap;

  const firefly = require("./js/firefly");
  const rain = require("./js/rain");

  const animateChillJs = {
    rain,
    firefly,
  };

  window.animateChillJs = animateChillJs;
})(window);
