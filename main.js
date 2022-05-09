const bck = document.getElementById("gradient-container");
const leftColor = document.getElementById("left-color");
const rightColor = document.getElementById("right-color");
const selectedColorCSS = document.getElementById("selected-bck-text");
const btn = document.getElementById("btn-random");
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function setGradient() {
  bck.style.background =
    "linear-gradient(to right, " +
    leftColor.value +
    ", " +
    rightColor.value +
    " )";
  setText();
  generateHex();
}

function setText() {
  selectedColorCSS.textContent = bck.style.background + ";";
}

leftColor.addEventListener("input", setGradient);
rightColor.addEventListener("input", setGradient);

function addText() {
  setGradient();
}

window.onload = addText();

// Random color picker

function generateHex() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[index];
  }
  return hex;
}

function generateRandomGradient() {
  leftColor.value = generateHex();
  rightColor.value = generateHex();
  setGradient();
}

window.onload = function () {
  generateRandomGradient();
};

btn.addEventListener('click', generateRandomGradient);