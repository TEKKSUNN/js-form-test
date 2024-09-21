import "./stylesheets/styles.css";

document.addEventListener("DOMContentLoaded", () => {
  const stopSubmit = (e) => { e.preventDefault() };
  const checkText = (e) => {
    const target = e.target;
    const value = target.value;
    const minlength = 3;
    const maxlength = 20;
    const pattern = new RegExp(/([A-Z][a-z]*)+(( ([A-Z][a-z]*))+)*/);
    const validClass = "actual-valid";
    const invalidClass = "actual-invalid";
    const check = value.match(pattern);
    if (value === "") {
      return;
    } else if (value.length > maxlength) {
      target.setCustomValidity("Too long.");
      target.reportValidity();
      return;
    } else if (value.length < minlength) {
      target.setCustomValidity("Too short.");
      target.reportValidity();
      return;
    }
    if (!check) {
      target.setCustomValidity("First letter must be uppercased.");
      target.reportValidity();
      target.classList.remove(validClass);
      target.classList.add(invalidClass);
      return;
    }
    target.setCustomValidity("");
    target.reportValidity();
    target.classList.remove(invalidClass);
    target.classList.add(validClass);
  };
  const getInput = (query) => document.getElementById(query);
  document.querySelector("form").addEventListener("submit", stopSubmit);
  getInput("first-name").addEventListener("focusout", checkText);
  getInput("last-name").addEventListener("focusout", checkText);
});