// Fetching HTML elements using their IDs
const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");

// Function to make the page dynamic
function changeText() {
  titleElement.innerText = "HTML 🤝 JavaScript";
  descriptionElement.textContent = "The page is now dynamic using JavaScript ✨";
}
