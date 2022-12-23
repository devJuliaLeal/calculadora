const numberButtons = document.querySelectAll("[data-number]");
const operationButtons = document.querySelectAll("[data-operator]");
const deleteButtons = document.querySelectAll("[data-delete]");
const previousOperandTextElement = document.querySelectAll(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelectAll(
  "[data-current-operand]"
);
const allClearButtons = document.querySelectAll("[data-all-clear]");

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  updateDisplay() {
    this.previousOperandTextElement.innerText = this.previousOperand;
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

allClearButtons.addEventListener("click", () => {
  Calculator.clear();
  Calculator.updateDisplay();
});
