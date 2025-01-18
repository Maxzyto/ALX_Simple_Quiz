function checkAnswer() {
  const correctAnswer = "4"; // Correct answer to the quiz question

  // Get the user's selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  const userAnswer = selectedOption ? (selectedOption as HTMLInputElement).value : null;

  // Compare user's answer with the correct answer
  if (userAnswer === correctAnswer) {
    const feedbackElement = document.getElementById("feedback");
    if (feedbackElement) {
    feedbackElement.textContent= "Correct! Well done."
    if (feedbackElement) {
      feedbackElement.textContent = "That's incorrect. Try again!";
    }
  } else {
    const feedbackElement = document.getElementById("feedback");
    if (feedbackElement) {
      feedbackElement.textContent = "That's incorrect. Try again!";
    }
  }
}

// Add event listener to the Submit Answer button
const submitButton = document.getElementById("submit-answer");
if (submitButton) {
  submitButton.addEventListener("click", checkAnswer);
}
}
