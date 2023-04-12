const emailSubmitForm = document.querySelector(".email-submit-form");
const emailInput = document.querySelector(".email-input");
const submitButton = document.querySelector(".submit-button");
const emailErrorMessage = document.querySelector(".email-error-message");
const errorIcon = document.querySelector(".error-icon");
const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const startTimeout = setInterval(() => {
    emailErrorMessage.style.display = "none";
    errorIcon.style.display = "none";
    emailInput.style.border = "2px solid black";
}, 5000);

emailSubmitForm.addEventListener("submit", function(event) {
    event.preventDefault();
});

submitButton.addEventListener("click", function () {
  if (emailInput.value.length === 0) {
    emailErrorMessage.style.display = "inline";
    emailErrorMessage.textContent = "Please input an email address";
    errorIcon.style.display = "inline";
    emailInput.style.border = "2px solid red";
    startTimeout;
  } else if (!emailInput.value.match(emailValidation)) {
        emailErrorMessage.style.display = "inline";
        emailErrorMessage.textContent = "Please provide a valid email";
        errorIcon.style.display = "inline";
        emailInput.style.border = "2px solid red";
        startTimeout;
  } else {
        emailErrorMessage.style.display = "inline";
        emailErrorMessage.style.color = "green";
        emailErrorMessage.textContent = "Thank you!";
        emailInput.style.border = "2px solid green";
        startTimeout;
  }
});