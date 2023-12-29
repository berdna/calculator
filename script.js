// Basic Operations
const add = function add(a, b) {
    return a + b;
}
const subtract = function subtract(a, b){
    return a - b;
}
const multiply = function multiply(a, b){
    return a * b;
}
const divide = function divide(a, b){
    return a / b;
}

// Declare variables
let firstNum = null;
let operator = null;
let nextNum = null;

// Operate function
function operate(a, o, b){
    let operator = o.toUpperCase();
    switch(operator){
        case 'ADD':
            return add(a,b);
            break;
        case 'SUBTRACT':
            return subtract(a,b);
            break;
        case 'MULTIPLY':
            return multiply(a,b);
            break;
        case 'DIVIDE':
            return divide(a,b);
            break;
    }
}

console.log(operate(50, String('divide'), 10));

