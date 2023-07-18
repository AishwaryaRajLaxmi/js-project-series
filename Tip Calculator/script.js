
const calculateButton = document.querySelector(".calculate");


calculateButton.addEventListener("click", calculationHandler);

function calculationHandler() {
  const billAmountValue = parseFloat(
    document.querySelector("#billAmount").value
  );
  const tipPercentageValue = parseFloat(
    document.querySelector("#tipPercentage").value
  );

  let tipvalue = parseFloat(billAmountValue * tipPercentageValue) / 100;
  const tipAmount = (document.querySelector(
    "#tip-amount"
  ).innerHTML = `Tip Amount: ${tipvalue}`);
  const totalAmount = (document.querySelector(
    "#total-amount"
  ).innerHTML = `Total Amount: ${parseFloat(tipvalue + billAmountValue)}`);
}


const resetButton = document.querySelector(".reset");
resetButton.addEventListener('click',resetHandler);

function resetHandler(){
  document.querySelector("#tipPercentage").value='';
  document.querySelector("#billAmount").value='';
  document.getElementById('tip-amount').innerHTML=`Tip Amount`;
  document.getElementById('total-amount').innerHTML=`Total Amount`;

}