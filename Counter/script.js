let count = 0;

let resetCount = document.querySelector(".reset-btn");
resetCount.addEventListener("click", function () {
  let output = document.querySelector("#count");
  output.innerHTML = 0;
  count=0;
});

let incrementCount = document.querySelector(".increase-btn");
incrementCount.addEventListener("click", function () {
  let output = document.querySelector("#count");
  count++;
  output.innerHTML = count;
});

let decrementCount = document.querySelector(".decrease-btn");
decrementCount.addEventListener("click", function () {
  let output = document.querySelector("#count");
  count--;
  output.innerHTML = count;
});
