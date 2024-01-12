const form = document.querySelector(".form-card-app");

const holderNameInput = document.querySelector("#holder-name");
const cardNumInput = document.querySelector("#card-number");
const monthInput = document.querySelector("input[name='month-input']");
const yearInput = document.querySelector("input[name='year-input']");
const cvcInput = document.querySelector("#card-cvc");

const holderNameResult = document.querySelector(".holder-name-result");
const cardNumResult = document.querySelector(".card-number-result");
const monthResult = document.querySelector(".month-result");
const yearResult = document.querySelector(".year-result");
const cvcResult = document.querySelector(".cvc-result");

function isHolderNameValid(value) {
  const errorElement = document.querySelector(".holder-name-error");
  //const labelElement = document.querySelector("label[for='holder-name']");
  errorElement.textContent = "";

  if (value.length === 0) {
    errorElement.textContent = "Can't be blank";

    return false;
  }

  return true;
}

function handleHolderName() {
  holderNameInput.addEventListener("input", function () {
    holderNameResult.textContent = this.value;
  });
}

function updateDisplay(elem, value) {
  return (elem.textContent = value);
}

function formatCardNum(value) {
  return value.replace(/(.{4})/g, "$1 ").trim();
}

function handleCardNumInput() {
  //const cardNumInput = document.querySelector("#card-number");
  // const cardNumResult = document.querySelector(".card-number-result");

  cardNumInput.addEventListener("input", function () {
    let value = cardNumInput.value.replace(/\D/g, "");

    if (value.length > 16) {
      value = value.substring(0, 16);
    }

    cardNumInput.value = value;

    updateDisplay(cardNumResult, formatCardNum(value));
  });
}

function isCardNumValid(value) {
  const errorElement = document.querySelector(".card-number-error");
  //const labelElement = document.querySelector("label[for='card-number']");
  errorElement.textContent = "";

  if (value.length === 0) {
    errorElement.textContent = "Can't be blank";

    return false;
  }

  if (value.length !== 16) {
    errorElement.textContent =
      "Wrong format, numbers only & 16 digits required";

    return false;
  }

  return true;
}

function isMonthValid(value) {
  const errorElement = document.querySelector(".month-error");
  const monthValue = parseInt(monthInput.value.trim(), 10);
  errorElement.textContent = "";

  if (value.length === 0) {
    errorElement.textContent = "Can't be blank";

    return false;
  }

  if (!monthValue || monthValue < 1 || monthValue > 12) {
    errorElement.textContent = "Invalid month, must be between 01 and 12";

    return false;
  }

  return true;
}

function handleMonthInput() {
  monthInput.addEventListener("input", function () {
    let monthValue = monthInput.value;

    if (monthValue.length > 2) {
      monthValue = monthValue.slice(0, 2);
    }

    monthInput.value = monthValue;
    updateDisplay(monthResult, monthInput.value);
  });
}

function isYearValid(value) {
  const errorElement = document.querySelector(".year-error");
  errorElement.textContent = "";

  if (value.length === 0) {
    errorElement.textContent = "Can't be blank";

    return false;
  }

  if (value.length !== 2) {
    errorElement.textContent = "Wrong format, numbers only 2 digits required";

    return false;
  }

  return true;
}

function handleYearInput() {
  yearInput.addEventListener("input", function () {
    let yearValue = yearInput.value;

    if (yearValue.length > 2) {
      yearValue = yearValue.slice(0, 2);
    }

    yearInput.value = yearValue;
    updateDisplay(yearResult, yearInput.value);
  });
}

function isCvcValid(value) {
  const errorElement = document.querySelector(".cvc-error");
  errorElement.textContent = "";

  if (value.length === 0) {
    errorElement.textContent = "Can't be blank";

    return false;
  }

  if (value.length !== 3) {
    errorElement.textContent = "Wrong format, numbers only & 3 digits required";

    return false;
  }

  return true;
}

function handleCvcInput() {
  cvcInput.addEventListener("input", function () {
    let cvcValue = cvcInput.value;

    if (cvcValue.length > 3) {
      cvcValue = cvcValue.slice(0, 3);
    }

    cvcInput.value = cvcValue;
    updateDisplay(cvcResult, cvcInput.value);
  });
}

function handleSubmit() {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    isHolderNameValid(holderNameInput.value);
    isCardNumValid(cardNumInput.value);
    isMonthValid(monthInput.value);
    isYearValid(yearInput.value);
    isCvcValid(cvcInput.value);

    //console.log(holderNameInput.value);
    console.log("Card Holder Name:", holderNameInput.value);
    console.log("Card Number:", cardNumInput.value);
    console.log("Card Month:", monthInput.value);
    console.log("Card Year:", yearInput.value);
    console.log("Card Cvc:", cvcInput.value);
    console.log("Formulaire soumis !");
  });
}

function main() {
  handleHolderName();
  handleCardNumInput();
  handleMonthInput();
  handleYearInput();
  handleCvcInput();
  handleSubmit();
}

main();
