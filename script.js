const bill_amount = document.querySelector(".bill");
const ppl_number = document.querySelector(".ppl-number");
const tip_buttons = document.querySelectorAll(".tip-percentage");
const reset_button = document.querySelector(".reset");
const tip_total_result = document.querySelector(".tip-total-result");
const amount_total_result = document.querySelector(".total-wrapper-result");
let tip_percentage = 0.0;
let total_amount = 0.0;
let tip_total = 0.0;

bill_amount.addEventListener("input", billInputHandler);
ppl_number.addEventListener("input", pplInputHandler);

tip_buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

function pplInputHandler() {
  console.log("no");
}

function handleClick(event) {
  tip_buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");
  tip_percentage = event.target.textContent.replace(/%/, "") * 0.1;

  console.log(tip_percentage);
  billInputHandler();
}

function onLoadResults() {
  tip_total_result.textContent = "$" + tip_total;
  amount_total_result.textContent = "$" + total_amount;
}

function billInputHandler() {
  tip_total = bill_amount.value * tip_percentage;
  tip_total_result.textContent = "$" + tip_total;
}
