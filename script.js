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
    return totalValueString.substring(0, DISPLAY_CHAR_LIMIT);
}

// Return true if display is in error state
function checkForError() {
    if (Math.abs(totalValue) === Infinity || isNaN(totalValue)) {
        calcDisplay.textContent = "stop that";
        clearDisplay = true;
        opMode = "";
        return true;
    } else {
        calcDisplay.textContent = totalValue;
    }

    return false;
}

function checkClearDisplay() {
    opMode === "=" ? (clearDisplay = false) : (clearDisplay = true);
}

function isNumberKey(eKey) {
    switch (eKey) {
        case "0":
            return true;
        case "1":
            return true;
        case "2":
            return true;
        case "3":
            return true;
        case "4":
            return true;
        case "5":
            return true;
        case "6":
            return true;
        case "7":
            return true;
        case "8":
            return true;
        case "9":
            return true;
        case ".":
            return true;
        default:
            return false;
    }
}

function isOpKey(eKey) {
    switch (eKey) {
        case "+":
            return true;
        case "-":
            return true;
        case "*":
            return true;
        case "/":
            return true;
        case "=":
            return true;
        case "Enter":
            return true;
        default:
            return false;
    }
}

document.addEventListener("keydown", (e) => {
    if (isNumberKey(e.key)) {
        if (
            calcDisplay.textContent === "0" ||
            clearDisplay ||
            isNaN(Number(calcDisplay.textContent))
        ) {
            e.key === "."
                ? (calcDisplay.textContent = "0.")
                : (calcDisplay.textContent = e.key);
            displayValue = Number(calcDisplay.textContent);
            clearDisplay = false;
            return;
        }

        if (e.key === "." && hasDecimal(calcDisplay.textContent)) return;

        calcDisplay.textContent += e.key;
        calcDisplay.textContent = limitDisplayDigits(calcDisplay.textContent);
    }

    if (isOpKey(e.key)) {
        totalValue = operate(opMode, totalValue, displayValue);
        if (e.key === "+") opMode = "+";
        if (e.key === "-") opMode = "-";
        if (e.key === "*") opMode = "*";
        if (e.key === "/") opMode = "/";
        if (e.key === "=" || e.key === "Enter") opMode = "=";

        totalValue = Number(limitDisplayDigits(totalValue));

        if (checkForError()) return;

        checkClearDisplay();
    }

    if (e.key === "Escape") {
        calcDisplay.textContent = "0";
        totalValue = 0;
        opMode = "";
    }

    if (e.key === "Backspace") {
        if (calcDisplay.textContent.length === 1) {
            calcDisplay.textContent = "0";
            displayValue = Number(calcDisplay.textContent);
            return;
        }
        clearDisplay = false;
        calcDisplay.textContent = calcDisplay.textContent.substring(
            0,
            calcDisplay.textContent.length - 1
        );
    }

    displayValue = Number(calcDisplay.textContent);
});

calcBtnContainer.addEventListener("click", (e) => {
    if (e.target.nodeName !== "BUTTON") {
        return;
    }

    if (e.target.className === "num-btn") {
        if (
            calcDisplay.textContent === "0" ||
            clearDisplay ||
            isNaN(Number(calcDisplay.textContent))
        ) {
            e.target.id === "btn-dot"
                ? (calcDisplay.textContent = "0.")
                : (calcDisplay.textContent = e.target.textContent);
            displayValue = Number(calcDisplay.textContent);
            clearDisplay = false;
            return;
        }

        if (e.target.id === "btn-dot" && hasDecimal(calcDisplay.textContent)) return;

        calcDisplay.textContent += e.target.textContent;
        calcDisplay.textContent = limitDisplayDigits(calcDisplay.textContent);
    }

    if (e.target.className === "op-btn") {
        totalValue = operate(opMode, totalValue, displayValue);
        if (e.target.id === "btn-add") opMode = "+";
        if (e.target.id === "btn-subtract") opMode = "-";
        if (e.target.id === "btn-multiply") opMode = "*";
        if (e.target.id === "btn-divide") opMode = "/";
        if (e.target.id === "btn-equals") opMode = "=";

        totalValue = Number(limitDisplayDigits(totalValue));

        if (checkForError()) return;

        checkClearDisplay();
    }

    if (e.target.id === "btn-ac") {
        calcDisplay.textContent = "0";
        totalValue = 0;
        opMode = "";
    }

    if (e.target.id === "btn-backspace") {
        if (calcDisplay.textContent.length === 1) {
            calcDisplay.textContent = "0";
            displayValue = Number(calcDisplay.textContent);
            return;
        }
        clearDisplay = false;
        calcDisplay.textContent = calcDisplay.textContent.substring(
            0,
            calcDisplay.textContent.length - 1
        );
    }

    displayValue = Number(calcDisplay.textContent);
});

calcBtnContainer.addEventListener("mousedown", (e) => {
    if (e.target.nodeName !== "BUTTON") {
        return;
    }
    e.target.style.filter = "brightness(85%)";
});

calcBtnContainer.addEventListener("mouseup", (e) => {
    if (e.target.nodeName !== "BUTTON") {
        return;
    }
    e.target.style.filter = "brightness(110%)";
});

calcBtnContainer.addEventListener("mouseout", (e) => {
    if (e.target.nodeName !== "BUTTON") {
        return;
    }
    e.target.style.filter = "brightness(100%)";
});

calcBtnContainer.addEventListener("mouseover", (e) => {
    if (e.target.nodeName !== "BUTTON") {
        return;
    }
    e.target.style.filter = "brightness(110%)";
});