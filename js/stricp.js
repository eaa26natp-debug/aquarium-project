"use strict";

const bubble = document.getElementById("bubble1");
console.log(bubble);

bubble.addEventListener("click", () => {
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