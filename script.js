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
    return a / b;
}

function operate(op, a, b) {
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}
const calcDisplay = document.querySelector("#calc-display");
const calcBtnContainer = document.querySelector("#calc-btn-container");

let totalValue = 0;
let displayValue = Number(calcDisplay.textContent);
let clearDisplay = false;

calcBtnContainer.addEventListener("click", (e) => {
    if (e.target.nodeName !== "BUTTON") {
        return;
    }

    if (e.target.className === "num-btn") {
        if (calcDisplay.textContent === "0" || clearDisplay) {
            calcDisplay.textContent = e.target.textContent;
            displayValue = Number(calcDisplay.textContent);
            clearDisplay = false;
            return;
        }
        calcDisplay.textContent += e.target.textContent;
    }

    if (e.target.className === "op-btn") {
        if (e.target.id === "btn-add") {
            totalValue = add(totalValue, displayValue);
        }
        calcDisplay.textContent = totalValue;
        clearDisplay = true;
    }

    if (e.target.id === "ac-btn") {
        calcDisplay.textContent = "0";
        totalValue = 0;
    }

    displayValue = Number(calcDisplay.textContent);
});