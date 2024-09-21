import { getInput, showError, showNoError } from "./helpers";
import { showNoValueMsg } from "./validate";

export default function checkEmail(e) {
  const target = e.target;
  const value = target.value;
  const check = pattern.test(value);
  const errorMsg = (msg) => {
    showError(target, msg);
  }
  if (value === "") {
    showNoValueMsg(target);
    return;
  }
  if (!check) {
    errorMsg("It's supposed to look like \"example@example.example\".");
    return;
  }
  showNoError(target);
}

export const getEmail = () => getInput("user-email");

const pattern = new RegExp(/\w+@\w+\.\w+/);