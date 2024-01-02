const form = document.querySelector(".form-card-app");
//console.log(form);

// 1. Variables globales (limite au maximum)
// 2. Fonctions
// 2.1. utilitaires (e.g. : isCardHolderNameInputValid)
// 2.2. binding eventListeners

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const cardHolderNameInputValue = document.querySelector("#holder-name").value;
  //console.log(cardHolderNameInputValue);

  const cardNumberInputValue = document.querySelector("#card-number").value;

  const isCardHolderNameValid = isCardHolderNameInputValid();

  const isCardNumberValid = isCardNumberInputValid();

  if (isCardHolderNameValid && isCardNumberValid) {
    submitForm(cardHolderNameInputValue, cardNumberInputValue);
  }
});

const cardHolderNameInputElement = document.querySelector("#holder-name");

function isCardHolderNameInputValid() {
  let cardHolderNameErrorElement = document.querySelector(".holder-name-error");

  // let cardHolderNameLabelElement
  // card : /
  // holder : ✅
  // name :
  // label :
  // element : /

  // let labelDeCartHolderName
  // let cartholderNameLabel

  let cardHolderNameLabelElement = document.querySelector(
    "label[for='holder-name']"
  );

  // let holderNameErrorMessage

  cardHolderNameErrorElement.textContent = "";

  //   const cardHolderNameInputElement = document.querySelector(
  //     "#holder-name"
  //   );

  cardHolderNameInputElement.classList.remove("input-error");
  cardHolderNameLabelElement.classList.remove("label-error");

  if (cardHolderNameInputElement.value.trim() === "") {
    cardHolderNameErrorElement.textContent = "Can't be blank";

    cardHolderNameInputElement.classList.add("input-error");
    cardHolderNameLabelElement.classList.add("label-error");

    return false;
  }

  return true;
}

const cardNumberInputElement = document.querySelector("#card-number");

function isCardNumberInputValid() {
  let cardNumberErrorElement = document.querySelector(".card-number-error");
  let cardNumberLabelElement = document.querySelector(
    "label[for='card-number']"
  );

  const cardNumberValue = cardNumberInputElement.value;

  cardNumberErrorElement.textContent = "";

  cardNumberInputElement.classList.remove("input-error");
  cardNumberLabelElement.classList.remove("label-error");

  if (cardNumberInputElement.value.trim() === "") {
    cardNumberErrorElement.textContent = "Can't be blank";

    cardNumberInputElement.classList.add("input-error");
    cardNumberLabelElement.classList.add("label-error");

    return false;
  }

  if (cardNumberValue.length !== 16) {
    cardNumberErrorElement.textContent =
      "Wrong format, numbers only And 16 digits max";

    cardNumberInputElement.classList.add("input-error");
    cardNumberLabelElement.classList.add("label-error");

    return false;
  }

  return true;
}

// const cardHolderNameInput = document.querySelector("#holder-name");
// console.log(cardHolderNameInput);

const cardHolderNameResult = document.querySelector(".holder-name-result");
//console.log(cardHolderNameResult);

const cardNumberResult = document.querySelector(".card-number-result");

cardHolderNameInputElement.addEventListener("input", function () {
  displayInputData(cardHolderNameResult, cardHolderNameInputElement.value);
});

cardNumberInputElement.addEventListener("input", function () {
  let inputValue = cardNumberInputElement.value;

  if (inputValue.length > 16) {
    inputValue = inputValue.substring(0, 16);
  }

  cardNumberInputElement.value = inputValue;

  cardNumberResult.textContent = formatCardNumberForDisplay(inputValue);
});

function formatCardNumberForDisplay(value) {
  const numericValue = value.replace(/\D/g, "");

  return numericValue.replace(/(.{4})/g, "$1 ").trim();
}

function displayInputData(resultElement, inputValue) {
  /*const formattedValue = inputValue
    .replace(/(\d{4})(?=\d)/g, "$1 ")
    .slice(0, 19);*/

  resultElement.textContent = inputValue;
}

// cardHolderNameInput.addEventListener(
//   "#holder-name",
//   displayInputData
// );

function submitForm(cardHolderNameInputValue, cardNumberInputValue) {
  console.log("Card Number:", cardNumberInputValue);
  console.log("Formulaire soumis !");
}
