import checkName,
  { getFirstName, getLastName } from "./names";
import { stopSubmit } from "./helpers";

export default function validateForm() {
  getForm().addEventListener("submit", stopSubmit);
  getFirstName().addEventListener("input", checkName);
  getLastName().addEventListener("input", checkName);
}

const getForm = () => document.querySelector("form");