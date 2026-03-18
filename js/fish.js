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

/* Popup */
const popup = document.getElementById("fiske-popup");

function openPopup(fiskId) {
  // Finder fisken i JSON ud fra id-feltet
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

function showSelection(name) {
  document.querySelectorAll(".popup-sektion").forEach((s) => {});
  document.getElementById("sektion-" + name).classList.add("aktiv");
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