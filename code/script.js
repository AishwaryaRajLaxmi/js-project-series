const btnElem = document.querySelector(".btn");
const bodyElem = document.querySelector("body");

let colors = [
  "red",
  "yellow",
  "green",
  "purple",
  "orange",
  "violet",
  "orangered",
  "maroon",
];

btnElem.addEventListener("click", addColor);

function addColor() {
  let color = parseInt(Math.random() * colors.length);
  bodyElem.style.background = colors[color];
}
