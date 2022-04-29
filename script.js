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

function pow(a, b) {
  return Math.pow(a, b);
}

/* operate will call math functions */

function operate(operater, a, b) {
  switch (operater) {
    case "+":
      return add(a, b);

    case "-":
      subtract(a, b);
          return add(a, b);
      
    case "*":
      multiply(a, b);
          return add(a, b);
      
    case "/":
      divide(a, b);
          return add(a, b);
      
    case "^":
      pow(a, b);
          return add(a, b);
      
  }
}
