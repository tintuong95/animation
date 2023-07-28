function firefly(num) {
  for (var i = 0; i < num; i++) {
    const size = gsap.utils.random(2, 6);
    const delay = gsap.utils.random(3, 20);

    const firefly = document.createElement("div");
    firefly.className = "firefly";

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `M 1 12 C 35 -187 124 100 294 -120 C 415 -227 215 197 501 96`
    );

    document.body.append(firefly);

    gsap.fromTo(
      firefly,
      {
        position: "fixed",
        left: gsap.utils.random(0, window.screen.width),
        top: gsap.utils.random(0, window.screen.height),
        width: size,
        height: size,
        borderRadius: 100,
        boxShadow: " 0px 2px 10px  rgb(225, 255, 255)",
        opacity: 0,
        display: "block",
        transformOrigin: "center center",
        delay: delay,
        backgroundColor: "yellow",
        ease: "power1.inOut",
      },
      {
        boxShadow: " 0px 3px 20px  rgb(225, 255, 255,0.8)",
        opacity: gsap.utils.random(0.3, 1),
        delay: delay,
        display: "none",
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      }
    );

    gsap.to(firefly, {
      duration: gsap.utils.random(7, 15),

      motionPath: {
        path: path,

        autoRotate: true,
        start: 0,
        end: 1,
      },
      delay: delay,
      repeat: -1,
      yoyo: true,

      ease: "power1.inOut",
      onComplete: () => {
        firefly.remove();
      },
    });
  }
}

module.exports = firefly;
