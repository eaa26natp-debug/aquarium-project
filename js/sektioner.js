"use strict";

/* toggle popup visibility */
const goBackList = Array.from(document.getElementsByClassName("go-back"));

goBackList.forEach((goBackBtn) => {
  goBackBtn.addEventListener("click", () => {
    const popups = document.getElementsByClassName("popup-synlig");
    popups[0].classList.toggle("popup-synlig");
  });
});

/* Info redirect to food popup */
const foodBtn = document.getElementById("food-btn");

foodBtn.addEventListener("click", () => {
  document.getElementById("fiske-popup").classList.toggle("popup-synlig");
  document.getElementById("food-popup").classList.toggle("popup-synlig");
});