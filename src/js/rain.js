function rainAnimation(num, reg, color) {
  // Tạo hạt mưa và di chuyển chúng
  for (var i = 0; i < num; i++) {
    const position = gsap.utils.random(-100, window.screen.width);
    const rainLong = gsap.utils.random(15, 35);
    console.log(window.screen.width);
    const raindrop = document.createElement("div");
    raindrop.className = "raindrop";

    document.body.append(raindrop);

    gsap.fromTo(
      raindrop,
      {
        position: "fixed",
        left: position,
        // top: -10,
        width: "0.5px",
        height: rainLong,
        opacity: gsap.utils.random(0.4, 1),
        backgroundColor: "white",
      },
      {
        duration: gsap.utils.random(1, 2),
        y: window.screen.height + 50,
        x: reg,
        opacity: gsap.utils.random(0.2, 0.5),
        ease: "power1.inOut",
        repeat: -1,
        delay: gsap.utils.random(0, 0.2),
      }
    );
  }
}

module.exports = rainAnimation;
