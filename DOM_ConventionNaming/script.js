// DOM ELEMENT REFERENCES (top of the file)
const pageTitleElement = document.getElementById("pageTitle");
const userNameInputElement = document.getElementById("userNameInput");
const submitButtonElement = document.getElementById("submitButton");
const outputMessageElement = document.getElementById("outputMessage");

// EVENT HANDLING
submitButtonElement.addEventListener("click", function () {
  const userNameValue = userNameInputElement.value;

  outputMessageElement.textContent =
    "Hello, " + userNameValue + "! 👋 Welcome to JavaScript.";
});
