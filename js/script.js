document.querySelectorAll(".title").forEach((t) => {
  const animation = gsap.to(t, {
    paused: true,
    duration: 0.5,
    x: 15,
    ease: Cubic.easeOut,
  });

  t.addEventListener("mouseenter", () => {
    animation.play();
  });

  t.addEventListener("mouseleave", () => {
    animation.reverse();
  });
});

/**TweenMax.from(".nav", 2, {
  opacity: 0,
  y: -60,
  ease: Cubic.easeInOut,
});
**/
TweenMax.from(".title", 1.5, {
  delay: 1.5,
  opacity: 0,
  x: -60,
  ease: Cubic.easeInOut,
});

TweenMax.from(".logo-color", 1.5, {
  scale: 0,
  opacity: 0,
  ease: Cubic.easeInOut,
});

TweenMax.from(".divig-title", 2, {
  scale: 0,
  opacity: 0,
  ease: Cubic.easeInOut,
});

TweenMax.from(".about-left", 2, {
  opacity: 0,
  y: 500,
  ease: "sine.out",
});

TweenMax.from(".about-right", 1.5, {
  opacity: 0,
  y: -500,
  ease: "sine.out",
});

TweenMax.from(".drone-pic-left", 1.5, {
  opacity: 0,
  y: 500,
  ease: "sine.out",
});

TweenMax.from(".d-1", 2, {
  delay: 0.5,
  opacity: 0,
});

TweenMax.from(".d-2", 2, {
  opacity: 0,
  delay: 0.8,
});

TweenMax.from(".d-3", 1, {
  opacity: 0,
  delay: 1.1,
});

TweenMax.from(".sec-pic1", 1.5, {
  x: -900,
  ease: "sine.out",
});

TweenMax.from(".sec-pic2", 1.5, {
  x: 900,
  ease: "sine.out",
});

TweenMax.from(".box-1", 1.5, {
  x: -500,
  ease: "sine.out",
});

TweenMax.from(".box-3", 1.5, {
  x: 500,
  ease: "sine.out",
});

TweenMax.from(".box-2", 1.5, {
  y: 500,
  ease: "sine.out",
});

TweenMax.from(".free-top", 1.5, {
  y: 500,
  ease: "sine.out",
});

TweenMax.from(".free-bot", 1.5, {
  delay: 1,
  opacity: 0,
  y: 500,
  ease: "sine.out",
});

TweenMax.from(".bot-line", 1.5, {
  delay: 2,
  opacity: 0,
});

TweenMax.from(".contact-mid", 1, {
  opacity: 0,
  x: -800,
  ease: "sine.out",
});

/* MODAL */

const openButton = document.querySelector(".button-open");
const modalOverlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".close-button");

openButton.addEventListener("click", function () {
  modalOverlay.classList.add("open-modal");
});

closeButton.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});
