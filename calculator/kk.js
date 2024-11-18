//Get the display element
const display = document.getElementById("display");
//Append values to the display
function appendValue(value) { 
    display.value += value;

}
// clear the display
function clearDisplay() {
    display.value ="";
}
//Delete the last entry
function deletLast() {
    display.value = display.value.slice(0,-1);
}
// Perform the calculation
function calculate() {
    try {
        display.value = eval(display.value); // Use eval to calculate the expression
        
    } catch (error) {
        display.value = "Error";
    }

}



