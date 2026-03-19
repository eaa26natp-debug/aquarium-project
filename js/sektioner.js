"use strict";

/* toggle popup visibility */
/* const goBackList = Array.from(document.getElementsByClassName("go-back"));

goBackList.forEach((goBackBtn) => {
  goBackBtn.addEventListener("click", () => {
    const popups = document.getElementsByClassName("popup-synlig");
    popups[0].classList.toggle("popup-synlig");

    document.getElementById("fiske-popup").classList.add("popup-synlig"); 
  });
}); */

function goBack(from) {
if (from == "habitat") {
  document.getElementById("habitat-popup").classList.remove("popup-synlig");
}
if (from == "food") {
  document.getElementById("food-popup").classList.remove("popup-synlig");
}
if (from == "readmore") {
  document.getElementById("readmore-popup").classList.remove("popup-synlig");
}

  document.getElementById("fiske-popup").classList.remove("popup-hidden");
  document.getElementById("fiske-popup").classList.add("popup-synlig");
}

/* Info redirect to food popup */

function showSection(popup) {
  document
    .getElementById("sound-backbutton")
    .classList.toggle("sound-backbutton");

  console.log(document.getElementsByClassName("popup-synlig").length);

  if (popup == "food") {
    document.getElementById("fiske-popup").classList.toggle("popup-synlig");
    document.getElementById("food-popup").classList.toggle("popup-synlig");
  }
  if (popup == "readMore") {
    document.getElementById("readmore-popup").classList.toggle("popup-synlig");
    document.getElementById("fiske-popup").classList.toggle("popup-synlig");
  }
  if (popup == "habitat") {
    openHabitatPopup();
  }
  /*   document.getElementById("fiske-popup").classList.toggle("popup-synlig")
    document.getElementById("habitat-popup").classList.toggle("popup-synlig")
  } */
}

//Åben habitat popup til den korrekte fisk
let thisFish = null;

function openHabitatPopup() {
  if (!thisFish) return;

  document.getElementById("habitat-navn").textContent = thisFish.name;
  document.getElementById("habitat-latin").textContent = thisFish["latinskName"];

  document.getElementById("habitat-img").src = "imges/habitat-globus/" + thisFish["habitat-img"];
  document.getElementById("habitat-text").textContent = thisFish["habitatText"];

  document.getElementById("fiske-popup").classList.remove("popup-synlig");
  document.getElementById("fiske-popup").classList.add("popup-hidden");

  document.getElementById("habitat-popup").classList.add("popup-synlig");
  document.getElementById("habitat-popup").classList.remove("popup-hidden");
}