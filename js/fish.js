"use strict";

/* Henter fiske-info fra JSON filen*/
let fishList = [];
function GetFishData() {
  fetch("fish-list.json")
    .then((response) => response.json())
    .then((data) => {
      fishList = data;
    })
    .catch((error) => {
      console.error("Could not find fish data", error);
    });
}
GetFishData();

/* Popup kommer frem */
const popup = document.getElementById("fiske-popup");

function openPopup(fiskId) {
  // Finder fisken i JSON ud fra id-feltet
  const fisk = fishList.find((f) => f.id === fiskId);
  if (!fisk) {
    console.warn("Ingen fisk fundet med id:", fiskId);
    return;
  }

  thisFish = fisk;

  console.log(fisk.name);

  /* Fisk info */
  document.getElementById("popup-navn").textContent = fisk.name;
  document.getElementById("popup-latin").textContent = fisk["latinskName"];
  document.getElementById("popup-tekst").textContent = fisk["foodText"];

  /* Fisk food */
  const foodPopup = document.getElementById("food-popup");

  foodPopup.querySelector("h2").innerHTML = fisk.name;
  foodPopup.querySelectorAll("p")[0].innerHTML = fisk.latinskName;
  foodPopup.querySelectorAll("p")[1].innerHTML = fisk.foodText;

  const foodList = document.getElementsByClassName("foods")[0];
  
  /* Creates food elements */
  fisk.food.forEach((el, index) => {
    const foodContainer = document.createElement("div");

    const foodHead = document.createElement("h6");
    foodHead.innerHTML = Object.keys(el);

    const foodImg = document.createElement("img");
    foodImg.src = `../imges/icons/food-icons/${Object.values(fisk.food[index])[0]}`;

    foodContainer.appendChild(foodHead);
    foodContainer.appendChild(foodImg);

    foodList.appendChild(foodContainer);
  });

  /* open info popup */
  popup.classList.remove("popup-hidden");
  popup.classList.add("popup-synlig");
}

function closePopup() {
  popup.classList.remove("popup-synlig");
  popup.classList.add("popup-hidden");
}

// Fiskenes ID matcher dem, i JSON filen
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
