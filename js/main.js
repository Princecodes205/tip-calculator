"use strict";
const billValue = document.querySelector(".bill");
const numberPeople = document.querySelector(".error-input");
const resetBtn = document.querySelector(".reset");
const percentVal = document.querySelectorAll(".perBtn");
const customVal = document.querySelector(".custom");
const amountPerPerson = document.querySelector(".amtper");
const totalAmount = document.querySelector(".amttotal");
const errorMsg = document.querySelector(".error-msgs");

// the custom input calculation
const calcsCus = function () {
  const customPercentage = parseFloat(customVal.value);
  const perPerson =
    ((customPercentage / 100) * parseFloat(billValue.value)) /
    parseFloat(numberPeople.value);
  amountPerPerson.textContent = perPerson.toFixed(2);

  const total =
    (parseFloat(billValue.value) + perPerson * parseFloat(numberPeople.value)) /
    parseFloat(numberPeople.value);
  totalAmount.textContent = total.toFixed(2);
};

// The buttons calculations
percentVal.forEach((el, i) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    // Check for error
    const checkNumberPeople = function () {
      if (numberPeople.value === "") {
        numberPeople.classList.remove("no-error");
        errorMsg.classList.remove("hide");
        amountPerPerson.textContent = "$0.00";
      } else {
        numberPeople.classList.add("no-error");
        errorMsg.classList.add("hide");
        resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
      }

      if (billValue.value === "") {
        amountPerPerson.textContent = "$0.00";
      }
    };

    percentVal.forEach((el) => {
      el.addEventListener("click", checkNumberPeople);
    });

    customVal.addEventListener("input", checkNumberPeople);

    // Change the background color of the button when clicked
    percentVal.forEach((button) => {
      button.style.backgroundColor = " hsl(183, 100%, 15%)";
    });
    this.style.backgroundColor = "hsl(172, 67%, 45%)";

    // Calculations for each button form 10% - 50%
    const calcs5 = function () {
      const perPerson =
        ((5 / 100) * parseFloat(billValue.value)) /
        parseFloat(numberPeople.value);
      amountPerPerson.textContent = perPerson.toFixed(2);

      const total =
        (parseFloat(billValue.value) +
          perPerson * parseFloat(numberPeople.value)) /
        parseFloat(numberPeople.value);
      totalAmount.textContent = total.toFixed(2);
    };

    const calcs10 = function () {
      const perPerson =
        ((10 / 100) * parseFloat(billValue.value)) /
        parseFloat(numberPeople.value);
      amountPerPerson.textContent = perPerson.toFixed(2);

      const total =
        (parseFloat(billValue.value) +
          perPerson * parseFloat(numberPeople.value)) /
        parseFloat(numberPeople.value);
      totalAmount.textContent = total.toFixed(2);
      // el.style.backgroundColor = "hsl(172, 67%, 45%)";
    };

    const calcs15 = function () {
      const perPerson =
        ((15 / 100) * parseFloat(billValue.value)) /
        parseFloat(numberPeople.value);
      amountPerPerson.textContent = perPerson.toFixed(2);

      const total =
        (parseFloat(billValue.value) +
          perPerson * parseFloat(numberPeople.value)) /
        parseFloat(numberPeople.value);
      totalAmount.textContent = total.toFixed(2);
    };

    const calcs25 = function () {
      const perPerson =
        ((25 / 100) * parseFloat(billValue.value)) /
        parseFloat(numberPeople.value);
      amountPerPerson.textContent = perPerson.toFixed(2);

      const total =
        (parseFloat(billValue.value) +
          perPerson * parseFloat(numberPeople.value)) /
        parseFloat(numberPeople.value);
      totalAmount.textContent = total.toFixed(2);
    };

    const calcs50 = function () {
      const perPerson =
        ((50 / 100) * parseFloat(billValue.value)) /
        parseFloat(numberPeople.value);
      amountPerPerson.textContent = perPerson.toFixed(2);

      const total =
        (parseFloat(billValue.value) +
          perPerson * parseFloat(numberPeople.value)) /
        parseFloat(numberPeople.value);
      totalAmount.textContent = total.toFixed(2);
    };

    // Calling the functions
    if (i === 0) {
      el.addEventListener("click", calcs5);
    } else if (i === 1) {
      el.addEventListener("click", calcs10);
    } else if (i === 2) {
      el.addEventListener("click", calcs15);
    } else if (i === 3) {
      el.addEventListener("click", calcs25);
    } else if (i === 4) {
      el.addEventListener("click", calcs50);
    }

    // Reset function
    resetBtn.addEventListener("click", function (e) {
      e.preventDefault();
      percentVal.forEach((button) => {
        button.style.backgroundColor = " hsl(183, 100%, 15%)";
      });

      billValue.value = "";
      numberPeople.value = "";
      amountPerPerson.textContent = "$0.00";
      totalAmount.textContent = "$0.00";
      customVal.value = "";
      resetBtn.style.backgroundColor = " rgba(127, 156, 159, 0.486)";
    });
  });
});

// Caling the custom function
customVal.addEventListener("input", calcsCus);

if (customVal.value === "") {
  amountPerPerson.textContent = "$0.00";
}
