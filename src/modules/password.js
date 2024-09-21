import { getInput, showError, showNoError } from "./helpers";
import { showNoValueMsg } from "./validate";

export default function checkPassword(e) {
  const target = e.target;
  const value = target.value;
  const errorMsg = (msg) => { showError(target, msg) };
  if (value === "") {
    showNoValueMsg(target);
    return;
  }
  if (value.length > maxlength) {
    errorMsg("We need you to have a long password, but not this long.");
    return;
  } else if (value.length < minlength) {
    errorMsg("We need you to have a long password, its for your own safety.");
    return;
  }
  showNoError(target);
}

export const getPassword = () => getInput("password");

const minlength = 8;
const maxlength = 20;
