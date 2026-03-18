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

const bubble = document.getElementById("bubble1");
const sound = new Audio("sound/bubble-pop.mp3");
console.log(bubble);

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

let createbubble = document.createElement("img");
createbubble.classList.add("bubble");
createbubble.src = "imges/bubble.png";
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
