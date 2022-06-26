const bill_amount = document.querySelector(".bill");
const ppl_number = document.querySelector(".ppl-number");
const tip_buttons = document.querySelectorAll(".tip-percentage");
const custom_btn = document.querySelector(".custom-percent");
const reset_button = document.querySelector(".reset");
const tip_total_result = document.querySelector(".tip-total-result");
const amount_total_result = document.querySelector(".total-wrapper-result");
let tip_percentage = 0.0;
let total_amount = 0.0;
let amount_total_p_person = 0.0;
let tip_amount_p_person = 0.0;

//bill input
bill_amount.addEventListener("input", billInputHandler);
function billInputHandler() {
  if (bill_amount.value >= 0) {
    tip_amount_p_person_calc();
  } else {
    alert("Wrong bill value");
    bill_amount.value = 0;
  }
}

//button percentage handler

tip_buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

function handleClick(event) {
  tip_buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");
  tip_percentage = event.target.textContent.replace(/%/, "") * 0.01;

  console.log(tip_percentage);

  tip_amount_p_person_calc();
  custom_btn.value = 0.0;
}

//custom button handler
custom_btn.addEventListener("input", customInputHandler);

function customInputHandler() {
  tip_buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  if (custom_btn.value <= 100 && custom_btn.value >= 0) {
    tip_percentage = custom_btn.value * 0.01;
    tip_amount_p_person_calc();
  } else {
    alert("Max percentage is 100%");
    custom_btn.value = 0;
  }
}

//people input
ppl_number.addEventListener("input", pplInputHandler);

function pplInputHandler() {
  if (ppl_number.value >= 0) {
    tip_amount_p_person_calc();
  } else {
    alert("Wrong bill value");
    ppl_number.value = 0;
  }
}

//result calculation functions
function tip_amount_p_person_calc() {
  if (ppl_number.value === "0" || bill_amount.value === "0") {
    tip_total_result.innerHTML = "$ " + (0.0).toFixed(1);
    amount_total_result.innerHTML = "$ " + (0.0).toFixed(1);
    console.log("why?");
  } else {
    console.log("ke");
    tip_amount_p_person =
      (bill_amount.value * tip_percentage) / ppl_number.value;
    tip_total_result.innerHTML = "$" + tip_amount_p_person.toFixed(2);
    amount_total_p_person =
      parseFloat(bill_amount.value) / ppl_number.value + tip_amount_p_person;
    amount_total_result.innerHTML = "$" + amount_total_p_person.toFixed(2);
  }
}

//reset button
reset_button.addEventListener("click", reset);
function reset() {
  bill_amount.value = 0.0;
  ppl_number.value = 0.0;
  custom_btn.value = 0.0;
  tip_total_result.innerHTML = "$ " + (0.0).toFixed(1);
  amount_total_result.innerHTML = "$ " + (0.0).toFixed(1);
}

// 1. x * tip / ppl
// 2. x + x*tip /ppl
