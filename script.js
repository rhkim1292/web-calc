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
const numSection = document.querySelector("#num-section");

let displayValue = parseInt(calcDisplay.textContent);

numSection.addEventListener("click", (e) => {
    if (e.target.nodeName !== "BUTTON") {
        return;
    }

    if (e.target.className === "num-btn") {
        if (calcDisplay.textContent === "0") {
            calcDisplay.textContent = e.target.textContent;
            displayValue = parseInt(calcDisplay.textContent);
            return;
        }
        calcDisplay.textContent += e.target.textContent;
        displayValue = parseInt(calcDisplay.textContent);
    }
});