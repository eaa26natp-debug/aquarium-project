"use strict";

/* Fetches the fishes data from .json file */
let fishList = [];
function GetFishData() {
  fetch("../fish-list.json")
  .then(response => response.json())
  .then(data => {
    fishList = data;
  })  
  .catch(error => {
    console.error("Could not find fish data", error);
  })
}
GetFishData();


const audio = document.getElementById("bg-sound");
audio.play();
//document.removeEventListener("click", startSound);

const bubble = document.getElementById("bubble");
const sound = new Audio("sound/bubble-pop.mp3");
console.log(bubble);

// const bubble2 = document.getElementById("bubble2");
// const sound2 = new Audio("sound/bubble-pop.mp3");
// console.log(bubble);


// // Pop boblen1 på klik
// bubble2.addEventListener("click", () => {
//   sound.currentTime = 0;
//   sound.play();
//   console.log("test");

//   bubble2.style.transform = "scale(1.3)";
//   bubble2.style.opacity = "0";
//   console.log("test");

//   setTimeout(() => {
//     bubble2.style.transform = "scale(1)";
//     bubble2.style.opacity = "1";
//   }, 300);
// });

// // Pop boblen2 på klik
// bubble2.addEventListener("click", () => {
//   sound.currentTime = 0;
//   sound.play();
//   console.log("test");

//   bubble.style.transform = "scale(1.3)";
//   bubble.style.opacity = "0";
//   console.log("test");

//   setTimeout(() => {
//     bubble.style.transform = "scale(1)";
//     bubble.style.opacity = "1";
//   }, 300);
// });

/* Små bobler */
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

    bubble.addEventListener("click", () => {
    sound.currentTime = 0; // gør at lyden kan spilles hurtigt igen
    sound.play();

    bubble.style.opacity = "0";

    setTimeout(() => {
        bubble.remove();
        clearInterval(interval);
    }, 200);
});
};
setInterval(spawnBubble, 3000); // ny boble hver 1 sekund

/* Popup */
const popup = document.getElementById("fiske-popup");

function openPopup(fiskId) {
  // Finder fisken i JSON ud fra id-feltet

  console.log(fiskId);
  console.log(fishList);
  fishList.forEach((fish) => {
    console.log(fish.name);
  });

  
  const fisk = fishList.find((f) => f.id === fiskId);
  if (!fisk) {
    console.warn("Ingen fisk fundet med id:", fiskId);
    return;
  }

  document.getElementById("popup-navn").textContent = fisk.name;
  document.getElementById("popup-latin").textContent = fisk["latinsk-name"];
  document.getElementById("popup-tekst").textContent = fisk["food-text"];

  popup.classList.remove("popup-hidden");
  popup.classList.add("popup-synlig");
}

function closePopup() {
  popup.classList.remove("popup-synlig");
  popup.classList.add("popup-hidden");
}

// Alle fiske-id'er matcher JSON's "id"-felt
const fiskIds = [
  "fisk-lyrehale",
  "fisk-gul-kirugfisk",
  "fisk-paletkirugfisk",
  "fisk-eeal",
  "fiske-gruppe",
  "fisk-royal-gramma",
];

fiskIds.forEach((htmlId) => {
  document.getElementById(htmlId).addEventListener("click", (e) => {
    e.stopPropagation();
    openPopup(htmlId);
  });
});

// Klik udenfor popup lukker den
document.body.addEventListener("click", (e) => {
  if (!e.target.closest("#fiske-popup")) {
    closePopup();
  }
}); 



//Forstørrelse af rød koral vha klik
const bubleCoral = document.getElementById("bubleCoral")

bubleCoral.addEventListener("click", () => {
  bubleCoral.classList.add("bigger");
  setTimeout (function() {
    bubleCoral.classList.remove("bigger");
  }, 8000);
});
