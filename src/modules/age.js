import { getInput, showError, showNoError } from "./helpers";
import { showNoValueMsg } from "./validate";

export default function checkAge(e) {
  const target = e.target;
  const value = target.value;
  const errorMsg = (msg) => { showError(target, msg) };
  const intValue = parseInt(value);
  if (isNaN(intValue) && value !== "") {
    errorMsg("You jailbreaked the HTML, hah! Thought you won? NUH UH. THIS SHIT INVALID HAHAHAHA.");
    return;
  }
  if (value === "") {
    showNoValueMsg(target);
    return;
  }
  if (intValue < min) {
    errorMsg("You're too young.");
    return;
  } else if (intValue > max) {
    errorMsg("You're too old.");
    return;
  }
  showNoError(target);
}

export const getAge = () => getInput("user-age");

const min = 12;
const max = 150;