function submitQuiz() {
  const questions = document.querySelectorAll('.question');
  let score = 0;

  questions.forEach(question => {
    const correctAnswer = question.dataset.correct;
    const selectedOption = question.querySelector('input[type=radio]:checked');
    const explanation = question.querySelector('.explanation');
    
    // Reset highlights
    question.querySelectorAll('.answer-container').forEach(option => {
      option.classList.remove('correct', 'incorrect');
    });

    if (selectedOption) {
      const label = selectedOption.parentElement;
      if (selectedOption.value === correctAnswer) {
        label.classList.add('correct');
        score += 10;
      } else {
        label.classList.add('incorrect');
        const correctLabel = question.querySelector(`input[value="${correctAnswer}"]`).parentElement;
        correctLabel.classList.add('correct');
      }
      selectedOption.disabled = true;
    }

    // Show explanation
    if (explanation) {
      explanation.classList.remove('hidden');
      explanation.style.display = 'block'; // Ensure display property changes
    }

    // Disable all options
    question.querySelectorAll('input[type=radio]').forEach(option => option.disabled = true);
  });

  const scoreElement = document.querySelector('.score');
  if (scoreElement) {
    scoreElement.textContent = `Your score is: ${score}`;
    scoreElement.classList.remove('hidden');
  }
}
