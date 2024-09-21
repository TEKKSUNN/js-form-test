export const stopSubmit = (e) => { e.preventDefault() };
export const getInput = (query) => document.getElementById(query);
export const showError = (element, message) => {
  element.setCustomValidity(message);
  element.reportValidity();
};
export const showNoError = (element) => {
  showError(element, "");
}