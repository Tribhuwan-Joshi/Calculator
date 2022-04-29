/* Math functions for operations */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
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

function operate(operater, a, b) {
  switch (operater) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);

    case "*":
      return multiply(a, b);

    case "/":
      return divide(a, b);

    case "%":
      return modulo(a, b);
  }
}
