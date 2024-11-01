// Select elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll("#keys button");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");

let currentInput = ""; // Holds the current input value for the display

// Function to handle appending values to display
function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

// Function to calculate the result
function calculate() {
    try {
        // Calculate the result using eval safely
        const result = eval(currentInput);
        display.value = result;
        currentInput = result.toString(); // Update currentInput with the result for further calculations
    } catch (error) {
        display.value = "Error";
        currentInput = ""; // Reset current input on error
    }
}

// Function to clear the display
function clearDisplay() {
    currentInput = "";
    display.value = "0";
}

// Event listener for number and operator buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        if (value) {
            appendToDisplay(value);
        }
    });
});

// Event listener for the equal button
equalButton.addEventListener("click", calculate);

// Event listener for the clear button
clearButton.addEventListener("click", clearDisplay);
