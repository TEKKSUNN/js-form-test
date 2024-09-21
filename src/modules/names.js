import { getInput, showError, showNoError } from "./helpers";
import { showNoValueMsg } from "./validate";

export default function checkName(e) {
  const target = e.target;
  const value = target.value;
  const check = value.match(pattern);
  const errorMsg = (msg) => { showError(target, msg) };
  if (value === "") {
    showNoValueMsg(target);
    return;
  } else if (value.length > maxlength) {
    errorMsg("Name is too long. Must be shorter than or equal to 20.");
    return;
  } else if (value.length < minlength) {
    errorMsg("Name is too short. Must be longer than or equal to 3.");
    return;
  }
  if (!check) {
    errorMsg("First letter must be uppercased. There must only be letters in the names.");
    return;
  }
  showNoError(target);
};

export const getFirstName = () => getInput("first-name");
export const getLastName = () => getInput("last-name");

const minlength = 3;
const maxlength = 20;
const pattern = new RegExp(/([A-Z][a-z]*)+(( ([A-Z][a-z]*))+)*/);
