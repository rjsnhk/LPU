let displayValue: string = '';

function appendNumber(num: string): void {
  displayValue += num;
  updateDisplay();
}

function appendOperator(op: string): void {
  displayValue += op;
  updateDisplay();
}

function appendDecimal(dec: string): void {
  if (!displayValue.includes(dec)) {
    displayValue += dec;
    updateDisplay();
  }
}

function clearDisplay(): void {
  displayValue = '';
  updateDisplay();
}

function calculate(): void {
  try {
    const result: string = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function updateDisplay(): void {
  const displayElement: HTMLInputElement | null = document.getElementById('display') as HTMLInputElement;
  if (displayElement) {
    displayElement.value = displayValue;
  }
}
