
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
    let res = a/b;
    return (Number.isInteger(res) ? res : res.toFixed(2));
}


function sqrt(x) {
    let res = Math.sqrt(x);
    return (Number.isInteger(res) ? res : res.toFixed(2));
}


