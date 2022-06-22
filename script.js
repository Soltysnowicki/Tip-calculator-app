const bill_amount = document.querySelector(".bill");
const ppl_number = document.querySelector(".ppl-number");
const tip_buttons = document.querySelectorAll(".tip-percentage");
const reset_button = document.querySelector(".reset");
let tip_total_result = bill_amount * ppl_number;

tip_buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

function handleClick(event) {
  tip_buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");
}
