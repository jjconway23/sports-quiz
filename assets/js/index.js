// Dom Selectors
const instructionsBtn = document.querySelector(".instructions-btn");
const instructionsContainer = document.querySelector(".instructions");
const closeInstructions = document.getElementById("close-instructions")

// Event Listeners
instructionsBtn.addEventListener("click", openInstructions);
closeInstructions.addEventListener("click", closeInstructionsContainer);

//opens instructions
function openInstructions() {
    instructionsContainer.style.display = "block";
}
// closes instructions
function closeInstructionsContainer() {
    instructionsContainer.style.display = "none";
}