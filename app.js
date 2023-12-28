const form = document.querySelector(".form-card-app");
console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const cardHolderNameInputValue = document.querySelector(
    "#card-details-holder-name"
  ).value;

  console.log(cardHolderNameInputValue);

  const isCardHolderNameValid = isCardHolderNameInputValid(
    cardHolderNameInputValue
  );

  if (isCardHolderNameValid) {
    submitForm(cardHolderNameInputValue);
  }
});

const cardHolderNameInputElement = document.querySelector(
  "#card-details-holder-name"
);

function isCardHolderNameInputValid(cardHolderNameInputValue) {
  let cardHolderNameErrorElement = document.querySelector("#input-error");
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

// const cardHolderNameInput = document.querySelector("#card-details-holder-name");
// console.log(cardHolderNameInput);

const cardHolderNameResult = document.querySelector(
  ".front-card-holder-name-result"
);
console.log(cardHolderNameResult);

cardHolderNameInputElement.addEventListener("input", function () {
  displayInputData(cardHolderNameResult, cardHolderNameInputElement.value);
});

function displayInputData(cardHolderNameResult, value) {
  cardHolderNameResult.textContent = value;
}

// cardHolderNameInput.addEventListener(
//   "#card-details-holder-name",
//   displayInputData
// );

function submitForm() {
  console.log("Formulaire soumis !");
}
