import checkName,
  { getFirstName, getLastName } from "./names";
import checkPassword,
  { getPassword } from "./password";
import { showError, stopDefault } from "./helpers";

export default function validateForm() {
  getForm().addEventListener("submit", stopDefault);
  validate(getFirstName(), checkName);
  validate(getLastName(), checkName);
  validate(getPassword(), checkPassword);
}

export const showNoValueMsg = (element) => {
  showError(element, "You can't leave this empty.");
}

const getForm = () => document.querySelector("form");
const validate = (input, checkFn) => { input.addEventListener("input", checkFn) };