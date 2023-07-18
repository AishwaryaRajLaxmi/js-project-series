let btnElem = document.querySelector(".btn");
let bodyElem = document.querySelector("body");

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

btnElem.addEventListener("click", function () {
  let color = parseInt(Math.random() * colors.length);
  bodyElem.style.background = colors[color];
});
