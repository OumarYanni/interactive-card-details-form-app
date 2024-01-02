const form = document.querySelector(".form-card-app");
//console.log(form);

// 1. Variables globales (limite au maximum)
// 2. Fonctions
// 2.1. utilitaires (e.g. : isCardHolderNameInputValid)
// 2.2. binding eventListeners

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const cardHolderNameInputValue = document.querySelector(
    "#card-details-holder-name"
  ).value;
  //console.log(cardHolderNameInputValue);

  const cardNumberInputValue = document.querySelector(
    "#card-details-number"
  ).value;

  const isCardHolderNameValid = isCardHolderNameInputValid();

  const isCardNumberValid = isCardNumberInputValid();

  if (isCardHolderNameValid && isCardNumberValid) {
    submitForm(cardHolderNameInputValue, cardNumberInputValue);
  }
});

const cardHolderNameInputElement = document.querySelector(
  "#card-details-holder-name"
);

function isCardHolderNameInputValid() {
  let cardHolderNameErrorElement = document.querySelector(
    "#card-holder-name-error"
  );

  // let cardHolderNameLabelElement
    // card : /
    // holder : ✅
    // name :
    // label :
    // element : /

    // let labelDeCartHolderName
    // let cartholderNameLabel

  let cardHolderNameLabelElement = document.querySelector(
    "label[for='card-details-holder-name']"
  );


  // let holderNameErrorMessage

  cardHolderNameErrorElement.textContent = "";

  //   const cardHolderNameInputElement = document.querySelector(
  //     "#card-details-holder-name"
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

const cardNumberInputElement = document.querySelector("#card-details-number");

function isCardNumberInputValid() {
  let cardNumberErrorElement = document.querySelector("#card-number-error");
  let cardNumberLabelElement = document.querySelector(
    "label[for='card-details-number']"
  );

  const cardNumberInputRawValue = cardNumberInputElement.value.replace(
    /\s+/g,
    ""
  );

  cardNumberErrorElement.textContent = "";

  cardNumberInputElement.classList.remove("input-error");
  cardNumberLabelElement.classList.remove("label-error");

  if (cardNumberInputElement.value.trim() === "") {
    cardNumberErrorElement.textContent = "Can't be blank";

    cardNumberInputElement.classList.add("input-error");
    cardNumberLabelElement.classList.add("label-error");

    return false;
  }

  if (!/^\d{16}$/.test(cardNumberInputRawValue)) {
    cardNumberErrorElement.textContent = "Wrong format, numbers only";

    cardNumberInputElement.classList.add("input-error");
    cardNumberLabelElement.classList.add("label-error");

    return false;
  }

  return true;
}

// const cardHolderNameInput = document.querySelector("#card-details-holder-name");
// console.log(cardHolderNameInput);

const cardHolderNameResult = document.querySelector(
  ".front-card-holder-name-result"
);
//console.log(cardHolderNameResult);

const cardNumberResult = document.querySelector(".front-card-number-result");

cardHolderNameInputElement.addEventListener("input", function () {
  displayInputData(cardHolderNameResult, cardHolderNameInputElement.value);
});

cardNumberInputElement.addEventListener("input", function () {
  let inputValue = cardNumberInputElement.value.replace(/\s+/g, "");

  if (inputValue.length > 16) {
    inputValue = inputValue.substring(0, 16);
  }

  cardNumberInputElement.value = formatCardNumber(inputValue);

  displayInputData(cardNumberResult, cardNumberInputElement.value);
});

function formatCardNumber(value) {
  return value.replace(/(.{4})/g, "$1 ").trim();
}

function displayInputData(resultElement, inputValue) {
  /*const formattedValue = inputValue
    .replace(/(\d{4})(?=\d)/g, "$1 ")
    .slice(0, 19);*/

  resultElement.textContent = inputValue;
}

// cardHolderNameInput.addEventListener(
//   "#card-details-holder-name",
//   displayInputData
// );

function submitForm(cardHolderNameInputValue, cardNumberInputValue) {
  console.log("Card Number:", cardNumberInputValue);
  console.log("Formulaire soumis !");
}
