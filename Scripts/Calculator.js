document.getElementById('Add').addEventListener("click", OperationHandler);
document.getElementById('Subtract').addEventListener("click", OperationHandler);
document.getElementById('Multiply').addEventListener("click", OperationHandler);
document.getElementById('Divide').addEventListener("click", OperationHandler);
document.getElementById('Modulus').addEventListener("click", OperationHandler);
document.getElementById('Clear').addEventListener("click", OperationHandler);

const CALC_DISPLAY = document.getElementById('Display').value;

let currentNumber = '';
let currentOperation = '';
let previousNumber = '';

function OperateNumber(number)
{
    currentNumber += number;
    CALC_DISPLAY = `${previousNumber} ${currentOperation} ${currentNumber}`;
}

function OperationHandler(event)
{
    const operationBtnId = event.target.id;

    switch(operationBtnId)
    {
        case "Add":
            break;
        case "Subtract":
            break;
        case "Multiply":
            break;
        case "Divide":
            break;
        case "Modulus":
            break;
        case "Clear":
            break;
        default:
            alert("No equation to calculate!");
        
    }
}