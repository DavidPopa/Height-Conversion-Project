"use strict";
const btn = document.querySelector("button");
const feet = document.getElementById("feet");
const inches = document.getElementById("inches");
const result = document.querySelector(".result");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (feet.value === " " || feet.value <= 0 || isNaN(feet.value)) {
    result.innerHTML = "altceva tati";
  } else if (inches.value === " " || inches.value <= 0 || isNaN(inches.value)) {
    result.innerHTML = "alceva tati";
  } else {
    let convert = parseInt(feet.value) * 12 + parseInt(inches.value);
    result.innerHTML = `${convert} cm`;
  }
  console.log(parseInt(feet.value) * 12);
});
