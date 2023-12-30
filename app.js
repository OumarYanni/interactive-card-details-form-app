const form = document.querySelector(".form-card-app");
//console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const cardHolderNameInputValue = document.querySelector(
    "#card-details-holder-name"
  ).value;
  //console.log(cardHolderNameInputValue);

  const cardNumberInputValue = parseInt(
    document.querySelector("#card-details-number").value,
    10
  );

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
  let cardHolderNameLabelElement = document.querySelector(
    "label[for='card-details-holder-name']"
  );

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

  cardNumberErrorElement.textContent = "";

  cardNumberInputElement.classList.remove("input-error");
  cardNumberLabelElement.classList.remove("label-error");

  if (cardNumberInputElement.value.trim() === "") {
    cardNumberErrorElement.textContent = "Can't be blank";

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
  displayInputData(
    cardHolderNameResult,
    cardHolderNameInputElement.value,
    cardNumberResult,
    cardNumberInputElement.value
  );
});

function displayInputData(
  cardHolderNameResult,
  cardHolderNameValue,
  cardNumberResult,
  cardNumberValue
) {
  cardHolderNameResult.textContent = cardHolderNameValue;

  cardNumberResult.textContent = cardNumberValue;
}

// cardHolderNameInput.addEventListener(
//   "#card-details-holder-name",
//   displayInputData
// );

function submitForm() {
  console.log("Formulaire soumis !");
}
