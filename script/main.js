document.addEventListener("DOMContentLoaded", function (event) {
  const startMessage = document.getElementById("startMessage");
  const animationContainer = document.querySelector(".container");

  startMessage.addEventListener("click", function () {
    startMessage.style.display = "none";

    animationTimeline();
  });
});

const animationTimeline = () => {
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];
  const hbd2 = document.getElementsByClassName("wish-hbd")[1];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;
  hbd2.innerHTML = `<span>${hbd2.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })

    .from(".zero", 0.7, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".zero",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=0.1"
    )
    .from(".zero2", 0.7, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".zero2",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=0.1"
    )
    .from(".zero3", 0.7, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".zero3",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=0.1"
    )
    .from(".zero4", 0.7, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".zero4",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=0.1"
    )
    .from(".zero5", 0.7, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".zero5",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2.1"
    )

    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )

    .from(
      ".elif-hat",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })

    .from(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=1"
    )
    .from(
      ".two",
      0.4,
      {
        opacity: 0,
        y: 10,
      },
      "+=1"
    )
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=4.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )

    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })

    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7"
    )
    .from(
      ".elif1",
      1,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.5"
    )
    .from(
      ".elif2",
      1,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: 50,
      },
      "+=0.1"
    )
    .from(
      ".elif3",
      1,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: 50,
      },
      "+=0.1"
    )
    .from(
      ".elif4",
      1,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: 50,
      },
      "+=0.1"
    )
    .to(
      ".elif1 ",
      0.5,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=2.5"
    )
    .to(
      ".elif2 ",
      0.5,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.1"
    )
    .to(
      ".elif3 ",
      0.5,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.1"
    )
    .to(
      ".elif4 ",
      0.5,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".uykucu",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=1"
    )
    .from(
      ".uykucuPhoto",
      1,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.5"
    )
    .to(
      ".uykucu",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".uykucuPhoto ",
      0.5,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.1"
    )

    .from(
      ".komik",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=1"
    )
    .from(
      ".komikPhoto",
      1,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.5"
    )
    .to(
      ".komik",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".komikPhoto ",
      0.5,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.1"
    )

    .from(
      ".neseli",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=1"
    )
    .from(
      ".neseliPhoto",
      1,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.5"
    )
    .to(
      ".neseli",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".neseliPhoto ",
      0.5,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.1"
    )

    .from(
      ".kulturlu",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=1"
    )
    .from(
      ".kulturluPhoto",
      1,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.5"
    )
    .to(
      ".kulturlu",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".kulturluPhoto ",
      0.5,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.1"
    )
    .from(
      ".romantik",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=1"
    )
    .from(
      ".romantikPhoto",
      1,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.5"
    )
    .to(
      ".romantik",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".romantikPhoto ",
      0.5,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.1"
    )
    .from(
      ".dindar",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=1"
    )
    .from(
      ".dindarPhoto",
      1,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.5"
    )
    .to(
      ".dindar",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".dindarPhoto ",
      0.5,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.1"
    )
    .from(
      ".acikmis",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=1"
    )
    .from(
      ".acikmisPhoto",
      1,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.5"
    )
    .to(
      ".acikmis",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".acikmisPhoto ",
      0.5,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.1"
    )
    .from(
      ".yikik",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=1"
    )
    .from(
      ".yikikPhoto",
      1,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.5"
    )
    .to(
      ".yikik",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".yikikPhoto ",
      0.5,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.1"
    )

    .from(
      ".alkolik",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=1"
    )
    .from(
      ".alkolikPhoto",
      1,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.5"
    )
    .to(
      ".alkolik",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".alkolikPhoto",
      0.5,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.1"
    )

    .from(
      ".karizmatik",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=1"
    )
    .from(
      ".karizmatikPhoto",
      1,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.5"
    )
    .to(
      ".karizmatik",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".karizmatikPhoto",
      0.5,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.1"
    )

    .from(
      ".prenses",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=1"
    )
    .from(
      ".prensesPhoto",
      1,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.5"
    )
    .to(
      ".prenses",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".prensesPhoto",
      0.5,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.1"
    )

    .from(
      ".guzel",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=1"
    )
    .from(
      ".guzelPhoto",
      1,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.5"
    )
    .to(
      ".guzel",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".guzelPhoto",
      0.5,
      {
        scale: 1.5,
        opacity: 0,
        x: 50,
        y: -50,
        rotationZ: -45,
      },
      "+=0.1"
    )
    .from(".three", 0.5, {
      scale: 3.5,
      opacity: 0,
      x: 25,
      y: -25,
      rotationZ: -45,
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=8.5"
    )

    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};
