function getElement(query) {
  let elem = document.querySelector(query);
  return elem;
}

let inputElem = getElement("#msg-box");
inputElem.addEventListener("input", function (e) {
  let value = e.target.value;
  if (value) {
    let errorMsg = getElement(".error-msg");
    errorMsg.style.display = "none";
  }
});

let submitBtn = getElement("#submit-btn");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let inputElem = getElement("#msg-box");
  let errorMsg = getElement(".error-msg");
  if (!inputElem.value) {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
    let msgOutput = getElement("#msg-output");
    msgOutput.innerHTML = inputElem.value;
    inputElem.value = "";
  }
});
