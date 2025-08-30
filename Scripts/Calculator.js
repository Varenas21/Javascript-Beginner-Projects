document.getElementById('Add').addEventListener("click", OperationHandler);
document.getElementById('Subtract').addEventListener("click", OperationHandler);
document.getElementById('Multiply').addEventListener("click", OperationHandler);
document.getElementById('Divide').addEventListener("click", OperationHandler);
document.getElementById('Mod').addEventListener("click", OperationHandler);
document.getElementById('Clear').addEventListener("click", OperationHandler);
document.getElementById('Equal').addEventListener("click", OperationHandler);

const CALC_DISPLAY = document.getElementById('CalcDisplay');

const OPERATION_SYMBOLS =
{
    Add: "+",
    Subtract: "-",
    Multiply: "*",
    Divide: "/",
    Mod: "%"
}

let currentInput = '';
let previousInput = '';
let currentOperation = '';

function OperateNumber(number) {
    currentInput += number;
    const symbol = OPERATION_SYMBOLS[currentOperation] || "";
    CALC_DISPLAY.textContent = `${previousInput} ${symbol} ${currentInput}`;
}

function OperationHandler(event) {
    const operationBtnId = event.target.id;

    if (operationBtnId === 'Clear') {
        currentInput = '';
        currentOperation = '';
        previousInput = '';
        CALC_DISPLAY.textContent = '0';
        return;
    }

    if (operationBtnId === 'Equal')
    {
        if (previousInput !== '' && currentInput !== '' && currentOperation !== '')
        {
            const result = Calculator(currentOperation);
            UpdateDisplayCalc(result);
            previousInput = result;
            currentInput = '';
            currentOperation = '';
        }
        return
    }

    if(currentInput === '') { return;}

    currentOperation = operationBtnId;
    previousInput = currentInput;
    currentInput = '';

    CALC_DISPLAY.textContent = `${previousInput} ${OPERATION_SYMBOLS[currentOperation]}`;
}

function Calculator(operation) {
    let result;
    let currentNumber = parseFloat(currentInput);
    let previousNumber = parseFloat(previousInput);

    switch (operation) {
        case "Add":
            result = previousNumber + currentNumber;
            console.log('Result: ' + result);
            break;
        case "Subtract":
            result = previousNumber - currentNumber;
            console.log("Result: " + result);
            break;
        case "Multiply":
            result = previousNumber * currentNumber;
            break;
        case "Divide":
            if (currentNumber === 0) { return; }
            result = previousNumber / currentNumber;
            break;
        case "Mod":
            result = previousNumber % currentNumber;
            break;
    }

    return result;

}

function UpdateDisplayCalc(result) {
    CALC_DISPLAY.textContent = `${result}`;
}