var displayValue = '';
function appendNumber(num) {
    displayValue += num;
    updateDisplay();
}
function appendOperator(op) {
    displayValue += op;
    updateDisplay();
}
function appendDecimal(dec) {
    if (!displayValue.includes(dec)) {
        displayValue += dec;
        updateDisplay();
    }
}
function clearDisplay() {
    displayValue = '';
    updateDisplay();
}
function calculate() {
    try {
        var result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    }
    catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}
function updateDisplay() {
    var displayElement = document.getElementById('display');
    if (displayElement) {
        displayElement.value = displayValue;
    }
}
