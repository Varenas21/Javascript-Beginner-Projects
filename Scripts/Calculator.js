document.getElementById('+').addEventListener("click", OperationHandler);
document.getElementById('-').addEventListener("click", OperationHandler);
document.getElementById('*').addEventListener("click", OperationHandler);
document.getElementById('/').addEventListener("click", OperationHandler);
document.getElementById('%').addEventListener("click", OperationHandler);
document.getElementById('Clear').addEventListener("click", OperationHandler);
document.getElementById('Total').addEventListener("click", OperationHandler);

const CALC_DISPLAY = document.getElementById('CalcDisplay');

let currentInput = '';
let previousInput = '';
let currentOperation = '';

function OperateNumber(number) {
    currentInput += number;
    CALC_DISPLAY.textContent = `${previousInput} ${currentOperation} ${currentInput}`;
}

function OperationHandler(event) {
    const operationBtnId = event.target.id;
    if (currentInput === '') { return; }
    if (operationBtnId === 'Clear') {
        currentInput = '';
        currentOperation = '';
        previousInput = '';
        CALC_DISPLAY.textContent = '0';
        return;
    }
    if (previousInput !== '') { Caculator(operationBtnId); }

    currentOperation = operationBtnId;
    previousInput = currentInput;
    currentInput = '';
    CALC_DISPLAY.textContent = `${previousInput} ${currentOperation}`;
}

function Caculator(operation) {
    let result;
    let currentNumber = parseFloat(currentInput);
    let previousNumber = parseFloat(previousInput);

    switch (operation) {
        case "+":
            result = previousNumber + currentNumber;
            UpdateDisplayCalc(result);
            return;
        case "-":
            result = previousNumber - currentNumber;
            UpdateDisplayCalc(result);
            return;
        case "*":
            result = previousNumber * currentNumber;
            return;
        case "/":
            if (currentNumber === 0) { return;}
            result = previousNumber / currentNumber;
            UpdateDisplayCalc(result);
            return;
        case "%":
            result = previousNumber % currentNumber;
            UpdateDisplayCalc(result);
            return;
    }
 
}

function UpdateDisplayCalc(total)
{
    currentOperation = '';
    previousInput = '';
    CALC_DISPLAY.textContent = total;
}