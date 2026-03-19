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

function showSection(popup) {
  if (popup == "food") {
    document.getElementById("fiske-popup").classList.toggle("popup-synlig");
    document.getElementById("food-popup").classList.toggle("popup-synlig");
  } 
  if (popup == "readMore") {
    console.log("click button readMore");
    
    
  }
}
