// add value from id
function takeValueFromId(id) {
    document.calculator.screen.value += id;
}

// Calculate base on current value
function calculate() {
    try {
        var input = eval(document.calculator.screen.value); //eval is evil, I konow
        document.calculator.screen.value = input;
    } catch (err) {
        document.calculator.screen.value = "Error";
    }
}

// clear screen
function clearScreen() {
    document.calculator.screen.value = "";
}