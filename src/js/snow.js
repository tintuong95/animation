const heightScreen = $(window).height();
const widthScreen = $(window).width();
console.log(heightScreen, widthScreen);
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createSnow(num) {
  for (var i = 0; i < num; i++) {
    const position = randomInt(-100, widthScreen);
    const size = randomInt(3, 8);

    const snow = $("<div>", {
      class: "snow",
      css: {
        width: size,
        height: size,
        backgroundColor: "white",
        left: position,
        borderRadius: 100,
        top: -10,
        position: "fixed",
      },
    });

    $("body").append(snow);

    gsap.to(snow, {
      duration: gsap.utils.random(5, 10),

      ease: "power1.inOut", // Hiệu ứng điều chỉnh độ mượt di chuyển

      top: heightScreen,
      x: randomInt(70, 90),
      opacity: randomInt(0.2, 0.5),
      ease: "power1.inOut",
      repeat: -1,
      delay: gsap.utils.random(3, 10),
    });
  }
}

createSnow(100);
