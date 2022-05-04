/* Math functions for operations */

function add(a, b) {
  let res = a + b;
  return Number.isInteger(res) ? res : res.toFixed(2);
}

function subtract(a, b) {
  let res = a - b;
  return Number.isInteger(res) ? res : res.toFixed(2);
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return "Can't divide by zero";
  }
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
let buttons = document.querySelectorAll("button");
let display = document.querySelector(".current");
const backspace = document.querySelector(".backspace");
const equal = document.querySelector(".equal");
const AC = document.querySelector(".ac");
const sign = document.querySelector(".sign");
const operators = document.querySelectorAll(".op");
const nums = document.querySelectorAll(".number");
const dot = document.querySelector(".dot");

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
document.addEventListener("keydown", (e) => handleKeyboard(e));

// add eventlistener to all button for ensuring the size is under 16 character
buttons.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    if (fullInput.length >= 16) {
      handleAC();
    }
  })
);
backspace.addEventListener("click", handleDelete);
equal.addEventListener("click", handleEqual);

AC.addEventListener("click", handleAC);

operators.forEach((op) =>
  op.addEventListener("click", (e) => handleOperators(e))
);

nums.forEach((num) => num.addEventListener("click", (e) => handleNums(e)));

dot.addEventListener("click", handleDot);

/* functions to handle events */

function handleKeyboard(e) {
  if (fullInput.length >= 16) {
    handleAC();
  }
  let key = e.key;
  console.log("key pressed ", key);

  if (key == "Escape") {
    handleAC();
  } else if (key >= 0 && key <= 9) {
    handleNums(e);
  } else if (
    key == "+" ||
    key == "-" ||
    key == "*" ||
    key == "%" ||
    key == "/"
  ) {
    handleOperators(e);
  } else if (key == "=" || key == "Enter") {
    handleEqual();
  } else if (key == ".") {
    handleDot();
  } else if (key == "Backspace") {
    handleDelete();
  }
  // console.log(fullInput);
}

function handleDot() {
  if (!fullInput || (firstEnd && !opUsed)) {
    return;
  }
  if (firstEnd) {
    if (secondValue.includes(".")) {
      return;
    } else {
      secondValue += ".";
      fullInput += ".";
      display.textContent = fullInput;
    }
  } else {
    if (firstValue.includes(".")) {
      return;
    } else {
      firstValue += ".";
      fullInput += ".";
      display.textContent = fullInput;
    }
  }
}

function handleEqual() {
  if (firstEnd && secondValue && opUsed) {
    let res = operate(currentOp, firstValue, secondValue);
    display.textContent = String(res);
    firstValue = String(res);
    fullInput = String(res);
    secondValue = "";
    opUsed = false;
  }
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
}


function handleDelete() {
  if (!fullInput) {
    return;
  }

  if (!firstEnd) {
    firstValue = firstValue.slice(0, -1);
  } else if (firstEnd && secondValue) {
    secondValue = secondValue.slice(0, -1);
  } else if (firstEnd && opUsed) {
    currentOp = "";
    fullInput = fullInput.slice(0, -2);
    display.textContent = fullInput;
    return;
  }
  fullInput = fullInput.slice(0, -1);

  display.textContent = fullInput;
}


function handleOperators(e) {

  let input = e.target.textContent;
  if (firstEnd && opUsed && !secondValue) {
    handleDelete();
    fullInput += ` ${input} `;
    currentOp = input;
    display.textContent = fullInput;
  }
  else if (opUsed && secondValue) {
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

}



function handleNums(e) {
  let input = e.target.textContent;

  // console.log(input);
  if (!firstEnd) {
    firstValue += input;
    fullInput += input;
    display.textContent = fullInput;
  } else if (firstEnd) {
    secondValue += input;
    fullInput += input;
    display.textContent = fullInput;
  }
}
