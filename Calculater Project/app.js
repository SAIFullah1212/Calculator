let display = document.getElementById('display');
let input = '';

function appendToDisplay(value) {
    input += value;
    display.value = input;
}

function clearDisplay() {
    input = '';
    display.value = input;
}

function calculateResult() {
    try {
        input = eval(input);
        display.value = input;
    } catch (error) {
        display.value = 'Error';
        input = '';
    }
}
