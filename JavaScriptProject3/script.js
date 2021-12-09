const VIEWBOX = document.getElementById("viewbox");
const NUMBERS = document.getElementsByClassName("number");
const OPERATORS = document.getElementsByClassName("operator");
const EQUAL = document.getElementById("equal");

function truncate(s, n = 25) {
  return s.substring(0, n);
}

function display(value) {
  let temp = VIEWBOX.textContent;
  temp += value;
  VIEWBOX.textContent = temp;
  VIEWBOX.scroll;
  VIEWBOX.scrollLeft = VIEWBOX.scrollWidth;
}

function addListeners(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("click", () => {
      display(array[i].value);
    });
  }
}
addListeners(NUMBERS);
EQUAL.addEventListener("click", () => {});
