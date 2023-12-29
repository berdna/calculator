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

// console.log(operate(50, String('divide'), 10));

// Display Event Controller
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

// Set Attributes
setAttr();

// Start Listening
getVal();

// Calculate
const equals = document.getElementById('=');
let valArray;
equals.addEventListener('click', function(e){
    const vals = document.querySelectorAll('h2');
    valArray = Array.from(vals).map(element => element.textContent);
// Find operator
let operator;
let op;
for(op of valArray) {
    if (op === '×') {
        operator = "Multiply";
        break;
    } else if (op === '+')
    {   
        operator = "Add";
        break;
    } else if (op === '−')
    {   
        operator = "Subtract";
        break;
    }  else if (op === '÷')
    {   
        operator = "Divide";
        break;
    }
}
const result = operate(parseInt(valArray[0]), operator, parseInt(valArray[2]));
displayResult(result);
});

// Clear Button
const clear = document.querySelector('#Clear');
clear.addEventListener('click', function(e) {
    if(display) {
        display.textContent = ''; 
    }
});
// //Delete Button
// const remove = document.querySelector('#Delete');
// remove.addEventListener('click', function(e){
//     if (display) {
//         let currentText = display.textContent;
//         display.textContent = currentText.slice(0, -1);
//     }
// });

function displayResult(result) {
    const answer = document.createElement('h1');
    answer.classList.add('result');
    answer.textContent = result;
    display.appendChild(answer);
}


// Display function
function displayVal(val) {
    let screen = document.createElement('h2');
    screen.textContent = val;
    display.append(screen);
};
function getVal() {
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
                let val = e.target.innerText;
                if(val != '=' && val != 'Delete') {
                   displayVal(val);
                   return val;
                }
            });
        });
}
// set id for all buttons 
function setAttr() {
    buttons.forEach(function(button) {
        button.setAttribute('id', button.textContent);
    });
}







