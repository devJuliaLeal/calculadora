const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operator]');
const equalsButtons = document.querySelector('[data-equals]');
const deletesButtons = document.querySelector('[data-delete]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

class Calculator 
{
    constructor (previousOperandTextElement,currentOperandTextElement)
    {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement; 
        clear()
        this.currentOperand ='';
        this.previousOperand ='';
        this.operation = undefined; 
    }
}
const Calculator =new Calculator
(
    previousOperandTextElement,
    currentOperandTextElement
)
allClearButton.addEventListener('click', ()) 