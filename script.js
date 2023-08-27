// Get the counter element
const counterElement = document.getElementById("counter");

// Initialize the counter value (you can fetch this from a database if needed)
let counterValue = 0;

// Update the counter display
function updateCounterDisplay() {
  counterElement.textContent = counterValue;
}

// Increment the counter and update the display
function incrementCounter() {
  counterValue++;
  updateCounterDisplay();
}

// Simulate a new visitor every second (you can modify this logic)
setInterval(incrementCounter, 1000);

// Initial display update
updateCounterDisplay();
