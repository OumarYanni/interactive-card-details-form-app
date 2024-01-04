const form = document.querySelector(".form-card-app");
const thankYouMessage = document.querySelector(".thank-you-message-wrapper");

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

form.addEventListener("submit", handleSubmit);

holderNameInput.addEventListener("input", () =>
  updateDisplay(holderNameResult, holderNameInput.value)
);
cardNumInput.addEventListener("input", handleCardNumInput);
monthInput.addEventListener("input", () => {
  let monthValue = monthInput.value;

  if (monthValue.length > 2) {
    monthValue = monthValue.slice(0, 2);
  }

  monthInput.value = monthValue;
  updateDisplay(monthResult, monthInput.value);
});
yearInput.addEventListener("input", () => {
  let yearValue = yearInput.value;

  if (yearValue.length > 2) {
    yearValue = yearValue.slice(0, 2);
  }

  yearInput.value = yearValue;
  updateDisplay(yearResult, yearInput.value);
});
cvcInput.addEventListener("input", () => {
  let cvcValue = cvcInput.value;

  if (cvcValue.length > 3) {
    cvcValue = cvcValue.slice(0, 3);
  }

  cvcInput.value = cvcValue;
  updateDisplay(cvcResult, cvcInput.value);
});

function isNameValid() {
  const errorElement = document.querySelector(".holder-name-error");
  const labelElement = document.querySelector("label[for='holder-name']");
  errorElement.textContent = "";

  if (holderNameInput.value.trim() === "") {
    errorElement.textContent = "Can't be blank";
    toggleError(true, holderNameInput, labelElement);
    return false;
  }

  toggleError(false, holderNameInput, labelElement);
  return true;
}

function isCardNumValid() {
  const errorElement = document.querySelector(".card-number-error");
  const labelElement = document.querySelector("label[for='card-number']");
  errorElement.textContent = "";

  if (cardNumInput.value.trim() === "") {
    errorElement.textContent = "Can't be blank";
    toggleError(true, cardNumInput, labelElement);
    return false;
  }

  if (cardNumInput.value.length !== 16) {
    errorElement.textContent =
      "Wrong format, numbers only & 16 digits required";
    toggleError(true, cardNumInput, labelElement);
    return false;
  }

  toggleError(false, cardNumInput, labelElement);
  return true;
}

function isMonthValid() {
  const errorElement = document.querySelector(".month-error");
  const labelElement = document.querySelector(
    "label[for='card-details-dates-input']"
  );
  const monthValue = parseInt(monthInput.value.trim(), 10);

  errorElement.textContent = "";

  if (monthInput.value.trim() === "") {
    errorElement.textContent = "Can't be blank";
    toggleError(true, monthInput, labelElement);
    return false;
  }

  if (!monthValue || monthValue < 1 || monthValue > 12) {
    errorElement.textContent = "Invalid month, must be between 01 and 12";
    toggleError(true, monthInput, labelElement);
    return false;
  }

  /*toggleError(false, monthInput, labelElement);*/

  return true;
}

function isYearValid() {
  const errorElement = document.querySelector(".year-error");
  const labelElement = document.querySelector(
    "label[for='card-details-dates-input']"
  );
  errorElement.textContent = "";

  if (yearInput.value.trim() === "") {
    errorElement.textContent = "Can't be blank";
    toggleError(true, yearInput, labelElement);
    return false;
  }

  if (yearInput.value.length !== 2) {
    errorElement.textContent = "Wrong format, numbers only 2 digits required";
    return false;
  }

  return true;
}

function isCvcValid() {
  const errorElement = document.querySelector(".cvc-error");
  const labelElement = document.querySelector("label[for='card-cvc']");
  errorElement.textContent = "";

  if (cvcInput.value.trim() === "") {
    errorElement.textContent = "Can't be blank";
    toggleError(true, cvcInput, labelElement);
    return false;
  }

  if (cvcInput.value.length !== 3) {
    errorElement.textContent = "Wrong format, numbers only & 3 digits required";
    return false;
  }

  return true;
}

function toggleError(isError, inputElem, labelElem) {
  inputElem.classList.toggle("input-error", isError);
  labelElem.classList.toggle("label-error", isError);
}

function handleCardNumInput() {
  let value = cardNumInput.value.replace(/\D/g, "");

  if (value.length > 16) {
    value = value.substring(0, 16);
  }

  cardNumInput.value = value;

  updateDisplay(cardNumResult, formatCardNum(value));
}

function formatCardNum(value) {
  return value.replace(/(.{4})/g, "$1 ").trim();
}

function updateDisplay(elem, value) {
  elem.textContent = value;
}

function handleSubmit(e) {
  e.preventDefault();

  const isNameValidFlag = isNameValid();
  const isCardNumValidFlag = isCardNumValid();
  const isMonthValidFlag = isMonthValid();
  const isYearValidFlag = isYearValid();
  const isCvcValidFlag = isCvcValid();

  if (
    isNameValidFlag &&
    isCardNumValidFlag &&
    isMonthValidFlag &&
    isYearValidFlag &&
    isCvcValidFlag
  ) {
    form.classList.add("hidden");
    thankYouMessage.classList.remove("hidden");

    console.log("Card Holder Name:", holderNameInput.value);
    console.log("Card Number:", cardNumInput.value);
    console.log("Card Month:", monthInput.value);
    console.log("Card Year:", yearInput.value);
    console.log("Card Cvc:", cvcInput.value);
    console.log("Formulaire soumis !");
  }
}
