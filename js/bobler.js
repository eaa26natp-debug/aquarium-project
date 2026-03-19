"use strict";

const audio = document.getElementById("bg-sound");
audio.play();

const bubble = document.getElementById("bubble");
const sound = new Audio("sound/bubble-pop.mp3");
console.log(bubble);

/* Små bobler */
function spawnBubble() {
  const bubble = document.createElement("img");
  bubble.src = "imges/bubble/bubble.svg";
  bubble.classList.add("bubble");

  let x = Math.random() * window.innerWidth;
  let y = 0;

  bubble.style.left = x + "px";
  bubble.style.bottom = "0px";

  document.body.appendChild(bubble);

  const interval = setInterval(() => {
    y += 1;
    bubble.style.bottom = y + "px";

    if (y > window.innerHeight) {
      bubble.remove();
      clearInterval(interval);
    }
  }, 20);

  bubble.addEventListener("click", () => {
    bubble.style.opacity = "0";
    setTimeout(() => {
      bubble.remove();
      clearInterval(interval);
    }, 200);
  });

  bubble.addEventListener("click", () => {
    sound.currentTime = 0; // gør at lyden kan spilles hurtigt igen
    sound.play();

    bubble.style.opacity = "0";

    setTimeout(() => {
      bubble.remove();
      clearInterval(interval);
    }, 200);
  });
}
setInterval(spawnBubble, 3000); // ny boble hver 1 sekund