const DISPLAY_CHAR_LIMIT = 9;
const calcDisplay = document.querySelector("#calc-display");
const calcBtnContainer = document.querySelector("#calc-btn-container");

let totalValue = 0;
let displayValue = Number(calcDisplay.textContent);
let clearDisplay = false;
let opMode = "";

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
        default:
            return b;
    }
}

function hasDecimal(calcDisplay) {
    if (calcDisplay.indexOf(".") !== -1) return true;
    return false;
}

function limitDisplayDigits(num) {
    let totalValueString = num.toString();
    return Number(totalValueString.substring(0, DISPLAY_CHAR_LIMIT));
}

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
        
        if (e.target.id === "btn-dot" && hasDecimal(calcDisplay.textContent)) return;

        calcDisplay.textContent += e.target.textContent;
    }

    if (e.target.className === "op-btn") {
        totalValue === 0
            ? (totalValue = displayValue)
            : (totalValue = operate(opMode, totalValue, displayValue));

        if (e.target.id === "btn-add") opMode = "+";
        if (e.target.id === "btn-subtract") opMode = "-";
        if (e.target.id === "btn-multiply") opMode = "*";
        if (e.target.id === "btn-divide") opMode = "/";
        if (e.target.id === "btn-equals") opMode = "=";

        totalValue = limitDisplayDigits(totalValue);

        totalValue === Infinity
            ? (calcDisplay.textContent = "stop that")
            : (calcDisplay.textContent = totalValue);
        clearDisplay = true;
    }

    if (e.target.id === "btn-ac") {
        calcDisplay.textContent = "0";
        totalValue = 0;
    }

    displayValue = Number(calcDisplay.textContent);
});
