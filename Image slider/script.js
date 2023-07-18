// Project Steps
// 1.Get the container box
// 2.Get the previous and next button and add functionality the current image change into previous and next onemptied
// 3.get the next buttton and add functionality to change the e

let pictures = [
  "pic1.jpeg",
  "pic2.jpeg",
  "pic3.jpeg",
  "pic4.jpeg",
  "pic5.jpeg",
  "pic6.jpeg",
  "pic7.jpeg",
];

let count = 0;
let imageBoxElem = document.querySelector(".image-box");

let rightButton = document.querySelector(".btn-right");
rightButton.addEventListener("click", nextImage);

function nextImage() {
  count++;
  if (count >= pictures.length) {
    count = 0;
  }
imageBoxElem.style.background= `url('./images/${pictures[count]}')`;
  ;
}
