"use strict";

/* Fetches the fishes data from .json file */
let fishList = [];
function GetFishData() {
  fetch("../fish-list.json")
    .then((response) => response.json())
    .then((data) => {
      fishList = data;
    })
    .catch((error) => {
      console.error("Could not find fish data", error);
    });
}
GetFishData();

const audio = document.getElementById("bg-sound");
audio.play();
//document.removeEventListener("click", startSound);

const bubble = document.getElementById("bubble1");
const sound = new Audio("sound/bubble-pop.mp3");
console.log(bubble);

// Pop boblen på klik
bubble.addEventListener("click", () => {
  sound.currentTime = 0;
  sound.play();
  console.log("test");

  bubble.style.transform = "scale(1.3)";
  bubble.style.opacity = "0";
  console.log("test");

  setTimeout(() => {
    bubble.style.transform = "scale(1)";
    bubble.style.opacity = "1";
  }, 300);
});

// Små bobler
function spawnBubble() {
  const bubble = document.createElement("img");
  bubble.src = "imag/bubble/bubble.png";
  bubble.classList.add("bubble");

  // start position (random vandret)
  bubble.style.left = Math.random() * window.innerWidth + "px";
  bubble.style.bottom = "0px";

  document.body.appendChild(bubble);

  // klik → pop
  bubble.addEventListener("click", () => {
    bubble.style.opacity = "0";
    setTimeout(() => bubble.remove(), 200);
  });
}

function spawnBubble() {
  const bubble = document.createElement("img");
  bubble.src = "imges/bubble/bubble.png";
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
}
setInterval(spawnBubble, 3000); // ny boble hver 1 sekund

// let createbubble = document.createElement("img");
// createbubble.classList.add("bubble")
//     createbubble.src = "imges/bubble.png"
//     document.body.appendChild(createbubble);
//     setTimeout(() => {
//     bubble.style.bottom = "0px";
//     bubble.style.opacity = "1";
// }, 300);

// bubble.addEventListener("clik", () => {
//     bubble.style.transform = "scale(1.3)";
//     bubble.style.opacity = "0";
//     console.log("test")

//     setTimeout( () => {
//         bubble.remove();
//     }, 200);
// });

/* Fiskedata og popup-funktionalitet */
const fiskData = {
  lyrehale: {
    navn: "Lyrehale Anthias",
    latin: "Pseudanthias squamipinnis",
    tekst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  gulKirugfisk: {
    navn: "Gul kirurgfisk",
    latin: "Chelmon rostratus",
    tekst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  fiskeGruppe: {
    navn: "Kirurgfisk",
    latin: "Acanthurus nigricans",
    tekst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  paletKirugfisk: {
    navn: "Paletkirurgfisk",
    latin: "Paracanthurus hepatus",
    tekst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  eeal: {
    navn: "Europæisk ål",
    latin: "Anguilla anguilla",
    tekst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  royalGramma: {
    navn: "Royal Gramma",
    latin: "Haemulon cyanum",
    tekst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};

const popup = document.getElementById("fiske-popup");

function åbnPopup(fiskId) {
  const fisk = fiskData[fiskId];
  if (!fisk) return;

  document.getElementById("popup-navn").textContent = fisk.navn;
  document.getElementById("popup-latin").textContent = fisk.latin;
  document.getElementById("popup-tekst").textContent = fisk.tekst;

  popup.classList.add("popup-synlig");
}

function lukPopup() {
  popup.classList.remove("popup-synlig");
}

// Klik på lyrehale åbner popup
document.getElementById("fisk-lyrehale").addEventListener("click", (e) => {
  e.stopPropagation();
  åbnPopup("lyrehale");
});

// Klik på gul kirurgfisk åbner popup
document.getElementById("fisk-gul-kirugfisk").addEventListener("click", (e) => {
  e.stopPropagation();
  åbnPopup("gulKirugfisk");
});

// Klik på paletkirugfisk åbner popup
document
  .getElementById("fisk-paletkirugfisk")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    åbnPopup("paletKirugfisk");
  });

// Klik på eeal åbner popup
document.getElementById("fisk-eeal").addEventListener("click", (e) => {
  e.stopPropagation();
  åbnPopup("eeal");
});

// klik på fiskegruppe åbner popup
document.getElementById("fiske-gruppe").addEventListener("click", (e) => {
  e.stopPropagation();
  åbnPopup("fiskeGruppe");
});

// Klik på royal gramma åbner popup
document.getElementById("fisk-royal-gramma").addEventListener("click", (e) => {
  e.stopPropagation();
  åbnPopup("royalGramma");
});

// Klik udenfor boblen lukker den
document.body.addEventListener("click", (e) => {
  if (!e.target.closest("#fiske-popup")) {
    lukPopup();
  }
});
