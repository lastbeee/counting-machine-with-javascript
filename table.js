// Get references to the DOM elements
const counterLabel = document.getElementById('counterLabel');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');

// Initialize the counter variable
let counter = 0;

// Function to update the label
function updateLabel() {
    counterLabel.textContent = counter;
}

// Event listener for decrease button
decreaseBtn.addEventListener('click', () => {
    counter--;
    updateLabel();
});

// Event listener for reset button
resetBtn.addEventListener('click', () => {
    counter = 0;
    updateLabel();
});

// Event listener for increase button
increaseBtn.addEventListener('click', () => {
    counter++;
    updateLabel();
});

// Initial label update
updateLabel();
