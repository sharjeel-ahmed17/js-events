function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

// ? counter

// / Get the counter element by its ID
var counterElement = document.getElementById("counter");
// Initial counter value
var counter = 0;

// Function to increase the counter value
function increaseCounter() {
  counter++;
  // Update the counter element's text content with the updated counter value
  counterElement.textContent = counter;
}

// Function to decrease the counter value
function decreaseCounter() {
  counter--;
  // Update the counter element's text content with the updated counter value
  counterElement.textContent = counter;
}
