import checkName,
  { getFirstName, getLastName } from "./names";
import checkPassword,
  { getPassword } from "./password";
import checkEmail,
  { getEmail } from "./email";
import { showError, stopDefault } from "./helpers";

export default function validateForm() {
  stopSubmit(getForm());
  validate(getFirstName(), checkName);
  validate(getLastName(), checkName);
  validate(getPassword(), checkPassword);
  validate(getEmail(), checkEmail);
}

export const showNoValueMsg = (element) => {
  showError(element, "You can't leave this empty.");
}

export const stopSubmit = (HTMLFormElement) => {
  HTMLFormElement.addEventListener("submit", stopDefault);
}

const getForm = () => document.querySelector("form");
const validate = (input, checkFn) => { input.addEventListener("input", checkFn) };
