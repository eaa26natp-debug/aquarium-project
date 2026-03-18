"use strict";

//Forstørrelse af rød koral vha klik
const bubleCoral = document.getElementById("bubleCoral");

bubleCoral.addEventListener("click", () => {
  bubleCoral.classList.add("bigger");
  setTimeout(function () {
    bubleCoral.classList.remove("bigger");
  }, 8000);
});

//Forstørrelse af grøn tang vha klik
const greenTang = document.getElementById("greenTang");

greenTang.addEventListener("click", () => {
  greenTang.classList.add("biggerGreen");
  setTimeout(function () {
    greenTang.classList.remove("biggerGreen");
  }, 8000);
});

//Forstørrelse af grøn tang vha klik
const redCoral = document.getElementById("redCoral");

redCoral.addEventListener("click", () => {
  redCoral.classList.add("biggerRed");
  setTimeout(function () {
    redCoral.classList.remove("biggerRed");
  }, 8000);
});