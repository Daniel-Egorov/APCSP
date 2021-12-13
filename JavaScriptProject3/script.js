const VIEWBOX = document.getElementById("viewbox");
const NUMBERS = document.getElementsByClassName("number");
const OPERATORS = document.getElementsByClassName("operator");
const EQUAL = document.getElementById("equal");
const CLEAR = document.getElementById("clear");
const DELETE = document.getElementById("delete");

// find power operations in a string
const powerRegex = /\d+(\.\d+)?\^\d+(\.\d+)?/;

// find parenthetical operations in a string
const parenRegex = /\d+\(/;

// find multiplication with pi
const leftSidePiMult = /\(?\d+\)?π/;
const rightSidePiMult = /π\(?\d+\)?/;

// display parameter to the text field
function display(value) {
  let temp = VIEWBOX.textContent;
  temp += value;
  VIEWBOX.textContent = temp;
  VIEWBOX.scroll;
  VIEWBOX.scrollLeft = VIEWBOX.scrollWidth;
}

function addNumberListeners() {
  for (let i = 0; i < NUMBERS.length; i++) {
    NUMBERS[i].addEventListener("click", () => {
      display(NUMBERS[i].value);
    });
  }
}

function addOperatorListeners() {
  for (let i = 0; i < OPERATORS.length; i++) {
    OPERATORS[i].addEventListener("click", () => {
      display(OPERATORS[i].value);
    });
  }
}

// count how many times a char appears in a str
function countChars(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) count++;
  }
  return count;
}

addNumberListeners();
addOperatorListeners();

CLEAR.addEventListener("click", () => {
  VIEWBOX.textContent = "";
});

DELETE.addEventListener("click", () => {
  VIEWBOX.textContent = VIEWBOX.textContent.substring(0, VIEWBOX.textContent.length - 1);
});

let match;
EQUAL.addEventListener("click", () => {
  let temp = VIEWBOX.textContent.replace("x", "*");
  temp = temp.replace("÷", "/");

  // In order to execute power operations
  match = temp.match(powerRegex);
  if (match) {
    match = match[0];
    let nums = match.split("^");

    // parseInt/Float the base
    if (nums[0].includes(".")) nums[0] = parseFloat(nums[0]);
    else nums[0] = parseInt(nums[0]);

    // parseInt/Float the exponent
    if (nums[1].includes(".")) nums[1] = parseFloat(nums[1]);
    else nums[1] = parseInt(nums[1]);

    temp = temp.replace(match, `Math.pow(${nums[0]}, ${nums[1]})`);
  }

  // In order to execute parethetical multiplication
  match = temp.match(parenRegex);
  if (match) {
    let nums = match[0].split("(");
    nums = nums.join("*(");
    temp = temp.replace(match[0], nums);
  }

  // In order to execute pi multiplication
  match = temp.match(leftSidePiMult);
  if (match) {
    let nums = match[0].split("π");
    nums = nums.join("*π");
    temp = temp.replace(match[0], nums);
  }

  match = temp.match(rightSidePiMult);
  if (match) {
    let nums = match[0].split("π");
    nums = nums.join("π*");
    temp = temp.replace(match[0], nums);
  }

  if (temp.includes("π")) temp = temp.replace("π", `${Math.PI}`);

  try {
    VIEWBOX.textContent = eval(temp);
  } catch (e) {
    VIEWBOX.textContent = "SyntaxError";
  }
});
