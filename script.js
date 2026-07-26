// ===== SELECT ELEMENTS ===== //
const previousOperandText = document.getElementById("previous-operand");
const currentOperandText = document.getElementById("current-operand");

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("[data-action='calculate']");
const clearButton = document.querySelector("[data-action='clear']");
const deleteButton = document.querySelector("[data-action='delete']");
const percentButton = document.querySelector("[data-action='percent']");

// ===== CALCULATOR STATE ===== //
let currentOperand = "0";
let previousOperand = "";
let operation = null;
let shouldResetScreen = false;

// ===== UPDATE DISPLAY ===== //
function updateDisplay() {
    currentOperandText.textContent = currentOperand;
    previousOperandText.textContent = operation
        ? `${previousOperand} ${getOperatorSymbol(operation)}`
        : "";
}

// ===== APPEND NUMBER ===== //
function appendNumber(number) {

    if (shouldResetScreen) {
        currentOperand = "0";
        shouldResetScreen = false;
    }

    // Prevent multiple decimals
    if (number === "." && currentOperand.includes(".")) return;

    // Replace leading zero
    if (currentOperand === "0" && number !== ".") {
        currentOperand = number;
    } else {
        currentOperand += number;
    }

    updateDisplay();
}

// ===== CHOOSE OPERATOR ===== //
function chooseOperation(operator) {
    if (currentOperand === "") return;

    if (previousOperand !== "") {
        calculate();
    }

    operation = operator;
    previousOperand = currentOperand;
    shouldResetScreen = true;

    updateDisplay();
}

// ===== CALCULATE ===== //
function calculate() {
    let result;

    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case "+":
            result = prev + current;
            break;

        case "-":
            result = prev - current;
            break;

        case "*":
            result = prev * current;
            break;

        case "/":

            if (current === 0) {
                currentOperand = "Error";
                previousOperand = "";
                operation = null;
                updateDisplay();
                return;
            }

            result = prev / current;
            break;

        default:
            return;
    }

    currentOperand = Number(result.toFixed(10)).toString();

    operation = null;
    previousOperand = "";

    shouldResetScreen = true;

    updateDisplay();
}

// ===== CLEAR ===== //
function clearCalculator() {
    currentOperand = "0";
    previousOperand = "";
    operation = null;
    shouldResetScreen = false;

    updateDisplay();
}

// ===== DELETE ===== //
function deleteNumber() {
    if (shouldResetScreen) return;

    if (currentOperand.length === 1) {
        currentOperand = "0";
    } else {
        currentOperand = currentOperand.slice(0, -1);
    }

    updateDisplay();
}

// ===== PERCENT ===== //
function percentage() {
    currentOperand = (
        parseFloat(currentOperand) / 100
    ).toString();

    updateDisplay();
}

// ===== SYMBOL DISPLAY ===== //
function getOperatorSymbol(operator) {
    switch (operator) {

        case "/":
            return "÷";

        case "*":
            return "x";

        case "-":
            return "-";

        case "+":
            return "+";

        default:
            return "";
    }
}

// ===== BUTTON EVENTS ===== //
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        appendNumber(button.dataset.number);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        chooseOperation(button.dataset.action);
    });
});

equalsButton.addEventListener("click", calculate);
clearButton.addEventListener("click", clearCalculator);
deleteButton.addEventListener("click", deleteNumber);
percentButton.addEventListener("click", percentage);

// ===== KEYBOARD SUPPORT ===== //
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key)) {
        appendNumber(key);
    }

    if (key === ".") {
        appendNumber(".");
    }

    if (key === "+" || key === "-" || key === "*" || key === "/") {
        chooseOperation(key);
    }

    if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculate();
    }

    if (key === "Backspace") {
        deleteNumber();
    }

    if (key === "Escape") {
        clearCalculator();
    }

    if (key === "%") {
        percentage();
    }
});

// ===== INITIALIZE ===== //
updateDisplay();