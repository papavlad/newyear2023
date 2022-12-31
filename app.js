//RICK ROLL
////////////////////////////////////////////////////////
const downloadMiss = document.querySelectorAll(".miss");
const nemoj = document.querySelector(".nemoj-popup");
const nemojClose = document.querySelector(".nemoj-wrap button");
const audio = new Audio("./rick.mp3");

downloadMiss.forEach((button) => {
  button.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {
      nemoj.style.opacity = 1;
      nemoj.style.pointerEvents = "auto";
    }, 1200);
  });
});

nemojClose.addEventListener("click", () => {
  nemoj.style.opacity = 0;
  nemoj.style.pointerEvents = "none";
  audio.pause();
});
////////////////////////////////////////////////////////

//WHEEEEEEEEll
////////////////////////////////////////////////////////
const wheelBtn = document.querySelector(".wheel button");
const wheel = document.querySelector(".wheel-img");

function rotate() {
  wheelBtn.style.pointerEvents = "none";
  wheel.style.transition = "20s";
  const fullCircles = Math.floor(Math.random() * 10 + 21);
  const degree = Math.floor(Math.random() * 361);
  const finalValue = fullCircles * 360 + degree;

  wheel.style.transform = `rotate(${finalValue}deg)`;
  wheel.ontransitionend = () => {
    setTimeout(() => {
      wheel.style.transition = "3s";
      wheel.style.transform = `rotate( ${finalValue - degree + 30}deg)`;
      wheelBtn.style.pointerEvents = "auto";
      wheel.ontransitionend = () => {
        wheel.style.transition = "none";
        wheel.style.transform = `rotate(30deg)`;
        showPopup();
      };
    }, 2000);
  };
}

wheelBtn.addEventListener("click", rotate);
////////////////////////////////////////////////////////

//COUPON MOVEMENT
////////////////////////////////////////////////////////
let constrain = 300;
let mouseOverContainer = document.querySelector(".coupon-overlay");
let ex1Layer = document.querySelector(".coupon-overlay .coupon");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - box.height / 10) / constrain;
  let calcY = (x - box.x - box.width / 20) / constrain;

  return (
    "perspective(100px) " +
    "   rotateX(" +
    calcX +
    "deg) " +
    "   rotateY(" +
    calcY +
    "deg) "
  );
}

function transformElement(el, xyEl) {
  el.style.transform = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function (e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function () {
    transformElement(ex1Layer, position);
  });
};
////////////////////////////////////////////////////////

//POPUP AFTER SPIN
////////////////////////////////////////////////////////
const coupon = document.querySelector(".coupon-overlay");
const closeCoupon = document.querySelector(".coupon-overlay button");
const audio2 = new Audio("./mariah-smash.mp3");

const wide = document.querySelector(".wide");
const christ = document.querySelector(".christ");
const original = document.querySelector(".original");
const face = document.querySelector(".face");
const tpose = document.querySelector(".tpose");

function showPopup() {
  coupon.style.opacity = 1;
  coupon.style.pointerEvents = "auto";

  audio2.currentTime = 0;
  audio2.play();

  setTimeout(() => {
    wide.style.animation = "wide 4s 10s steps(20) infinite";
    christ.style.animation = "christ 10s linear infinite";
    original.style.animation = "original 5s 10s linear infinite";
    tpose.style.animation = "tpose 10s linear infinite";
    face.style.animation = "face 7s 5s linear infinite";
  }, 7500);
}
closeCoupon.addEventListener("click", () => {
  coupon.style.opacity = 0;
  coupon.style.pointerEvents = "none";
  audio2.pause();
});
////////////////////////////////////////////////////////

//WARNING
////////////////////////////////////////////////////////
const warning = document.querySelector(".warning");
setTimeout(() => {
  warning.style.opacity = 0;
  warning.style.pointerEvents = "none";
}, 5000);
////////////////////////////////////////////////////////

//PAINT BUTTON EASTER EGG
////////////////////////////////////////////////////////
const paintBtn = document.querySelector(".button");
const paintPopup = document.querySelector(".paint-popup");
const paintClose = document.querySelector(".paint-popup button");
paintBtn.addEventListener("click", () => {
  paintPopup.style.opacity = 1;
  paintPopup.style.pointerEvents = "auto";
  paintClose.addEventListener("click", () => {
    paintPopup.style.opacity = 0;
    paintPopup.style.pointerEvents = "none";
  });
});
////////////////////////////////////////////////////////
