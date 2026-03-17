"use strict";

const bubble = document.getElementById("bubble1");
const sound = new Audio ("sound/bubble-pop.mp3");
console.log(bubble);

bubble.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();

    bubble.style.transform = "scale(1.3)";
    bubble.style.opacity = "0";
    console.log("test")

    setTimeout( () => {
         bubble.style.transform = "scale(1)";
        bubble.style.opacity = "1";
    }, 300);
})

// bubble.addEventListener("clik", () => {
//     bubble.style.transform = "scale(1.3)";
//     bubble.style.opacity = "0";
//     console.log("test")

//     setTimeout( () => {
//         bubble.remove();
//     }, 200);
// });