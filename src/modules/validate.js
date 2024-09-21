import checkName,
  { getFirstName, getLastName } from "./names";
import { stopSubmit } from "./helpers";

export default function validateForm() {
  getForm().addEventListener("submit", stopSubmit);
  getFirstName().addEventListener("focusout", checkName);
  getLastName().addEventListener("focusout", checkName);
}

const getForm = () => document.querySelector("form");