/* Math functions for operations */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  let res = a - b;
  return Number.isInteger(res) ? res : res.toFixed(2);
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  let res = a / b;
  return Number.isInteger(res) ? res : res.toFixed(2);
}

function modulo(a, b) {
  return a % b;
}

/* operate will call math functions */

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);

    case "*":
    case "x":
      return multiply(a, b);

    case "/":
    case "÷":
      return divide(a, b);

    case "%":
      return modulo(a, b);
  }
}

/* buttons */

let display = document.querySelector(".current");
const equal = document.querySelector(".equal");
const AC = document.querySelector(".ac");
const sign = document.querySelector(".sign");
const operators = document.querySelectorAll(".op");
const nums = document.querySelectorAll(".number");

/*  variables  */

let fullInput = "";
let fullInputLen = 0;
let opUsed = false;
let currentOp = "";
let signUsed = false;
let firstValue = "";
let firstEnd = false;
let secondValue = "";
let secondEnd = false;

/* add eventlistener */

equal.addEventListener("click", handleEqual);

AC.addEventListener("click", handleAC);
sign.addEventListener("click", handleSign);

operators.forEach((op) =>
  op.addEventListener("click", (e) => handleOperators(e))
);

nums.forEach((num) => num.addEventListener("click", (e) => handleNums(e)));

/* functions to handle events */

function handleEqual() {
  if (firstEnd && secondValue && opUsed) {
    let res = operate(currentOp, firstValue, secondValue);
    display.textContent = String(res);
    firstValue = String(res);
    fullInput = String(res);
    secondValue = "";
    opUsed = false;
  }
  console.log(
    " signUsed ",
    signUsed,
    "\n",
    "fullInput",
    fullInput,
    " calculatedOnce ",
    calculatedOnce,
    "\n",

    " opUsed ",
    opUsed,
    "\n",
    " currentOp ",
    currentOp,
    "\n",
    " firstValue ",
    firstValue,
    "\n",
    " firstEnd ",
    firstEnd,
    "\n",
    " secondValue ",
    secondValue
  );
}

function handleAC() {
  fullInput = "";
  fullInputLen = 0;
  opUsed = false;
  currentOp = "";
  firstValue = "";
  firstEnd = false;
  secondValue = "";
  secondEnd = false;

  signUsed = false;
  display.textContent = "0";
  console.log(
    " signUsed ",
    signUsed,
    "\n",
    "fullInput",
    fullInput,
    "\n",

    " opUsed ",
    opUsed,
    "\n",
    " currentOp ",
    currentOp,
    "\n",
    " firstValue ",
    firstValue,
    "\n",
    " firstEnd ",
    firstEnd,
    "\n",
    " secondValue ",
    secondValue
  );
}

function handleSign() {
  if (firstValue != "0") {
    if (firstValue && !opUsed) {
      if (signUsed) {
        firstValue = firstValue.slice(1);
        fullInput = fullInput.slice(1);
        signUsed = false;
      } else {
        firstValue = "-" + firstValue;
        fullInput = "-" + fullInput;
        signUsed = true;
      }
      display.textContent = fullInput;
    }
  }
  console.log(
    " signUsed ",
    signUsed,
    "\n",
    "fullInput",
    fullInput,
    "\n",
    " calculatedOnce ",
    calculatedOnce,
    "\n",

    " opUsed ",
    opUsed,
    "\n",
    " currentOp ",
    currentOp,
    "\n",
    " firstValue ",
    firstValue,
    "\n",
    " firstEnd ",
    firstEnd,
    "\n",
    " secondValue ",
    secondValue
  );
}

function handleOperators(e) {
  let input = e.target.textContent;
  if (opUsed && secondValue) {
    let res = operate(currentOp, firstValue, secondValue);
    fullInput = String(res) + ` ${input} `;

    currentOp = input;
    firstValue = String(res);
    secondValue = "";
    display.textContent = fullInput;
  } else if (!opUsed && firstValue) {
    currentOp = input;
    opUsed = true;
    fullInput += ` ${input} `;
    display.textContent = fullInput;
    firstEnd = true;
  }
  console.log(
    " signUsed ",
    signUsed,
    "\n",
    "fullInput",
    fullInput,
    "\n",

    " opUsed ",
    opUsed,
    "\n",
    " currentOp ",
    currentOp,
    "\n",
    " firstValue ",
    firstValue,
    "\n",
    " firstEnd ",
    firstEnd,
    "\n",
    " secondValue ",
    secondValue
  );
}

function handleNums(e) {
  let input = e.target.textContent;

  console.log(input);
  if (!firstEnd) {
    firstValue += input;
    fullInput += input;
    display.textContent = fullInput;
  } else if (firstEnd) {
    secondValue += input;
    fullInput += input;
    display.textContent = fullInput;
  }
  console.log(
    " signUsed ",
    signUsed,
    "\n",
    "fullInput",
    fullInput,
    "\n",

    " opUsed ",
    opUsed,
    "\n",
    " calculatedOnce ",
    calculatedOnce,
    "\n",
    " currentOp ",
    currentOp,
    "\n",
    " firstValue ",
    firstValue,
    "\n",
    " firstEnd ",
    firstEnd,
    "\n",
    " secondValue ",
    secondValue
  );
}
