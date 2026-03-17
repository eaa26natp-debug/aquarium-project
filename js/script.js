"use strict";

const audio = document.getElementById("bg-sound");
audio.play();
//document.removeEventListener("click", startSound);



const bubble = document.getElementById("bubble1");
const sound = new Audio("sound/bubble-pop.mp3");
console.log(bubble);

bubble.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();
    console.log("test")

    bubble.style.transform = "scale(1.3)";
    bubble.style.opacity = "0";
    console.log("test")

    setTimeout( () => {
         bubble.style.transform = "scale(1)";
        bubble.style.opacity = "1";
    }, 300);
});

let createbubble = document.createElement("img");
createbubble.classList.add("bubble")
    createbubble.src = "imges/bubble.png"
    document.body.appendChild(createbubble);
    setTimeout(() => {
    bubble.style.bottom = "0px";
    bubble.style.opacity = "1";
}, 300);

// bubble.addEventListener("clik", () => {
//     bubble.style.transform = "scale(1.3)";
//     bubble.style.opacity = "0";
//     console.log("test")

//     setTimeout( () => {
//         bubble.remove();
//     }, 200);
// });

const fiskData = {
  lyrehale: {
    navn: 'Lyrehale Anthias',
    latin: 'Pseudanthias squamipinnis',
    tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // tilføj flere fisk her...
};

const popup = document.getElementById('fiske-popup');

function åbnPopup(fiskId) {
  const fisk = fiskData[fiskId];
  if (!fisk) return;

  document.getElementById('popup-navn').textContent = fisk.navn;
  document.getElementById('popup-latin').textContent = fisk.latin;
  document.getElementById('popup-tekst').textContent = fisk.tekst;

  popup.classList.add('popup-synlig');
}

function lukPopup() {
  popup.classList.remove('popup-synlig');
}

// Klik på lyrehale åbner popup
document.getElementById('fisk-lyrehale').addEventListener('click', (e) => {
  e.stopPropagation();
  åbnPopup('lyrehale');
});

// Klik udenfor boblen lukker den
document.body.addEventListener('click', (e) => {
  if (!e.target.closest('#fiske-popup')) {
    lukPopup();
  }
});