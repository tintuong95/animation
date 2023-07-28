const heightScreen = $(window).height();
const widthScreen = $(window).width();

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function flowerAnimation() {
  const flower = $("<div>", {
    class: "flower",
    css: {
      position: "fixed",
      top: -30,
      left: gsap.utils.random(0, widthScreen),
      color: "#ffff",
      fontSize: gsap.utils.random(8, 15),
    },
    text: "❀",
  });

  $("body").append(flower);

  gsap.to(flower, {
    duration: gsap.utils.random(10, 20),
    opacity: 0.3,
    motionPath: {
      path: "M -12 11 C -193 222 8 226 -119 558 C -154 731 -64 650 107 840",
      start: 0,
      end: 1,
    },
    x: gsap.utils.random(-100, 100),
    delay: gsap.utils.random(0, 12),
    ease: "power1.inOut",

    onComplete: () => {
      firefly.remove();
    },
  });
}

setInterval(flowerAnimation, 500);
