//score variable to keep track of the score
let score = 0;
const totalQuestions = 3; 

// Question 1
document.querySelectorAll("#question1 .answerButton").forEach(function(button) {
    button.addEventListener("click", function() {
        checkAnswer("Article 14", button.textContent.trim(), "result1");
        displayScore();
    });
});

// Question 2
document.querySelectorAll("#question2 .answerButton").forEach(function(button) {
    button.addEventListener("click", function() {
        checkAnswer("G.V.Mavalankar", button.textContent.trim(), "result2");
        displayScore();
    });
});


document.querySelectorAll("#question3 .answerButton").forEach(function(button) {
    button.addEventListener("click", function() {
        checkAnswer("Pingali Venkayya", button.textContent.trim(), "result3");
        displayScore();
    });
});

// Function to check the answer
function checkAnswer(correctAnswer, selectedAnswer, resultId) {
    var resultElement = document.getElementById(resultId);
    if (correctAnswer === selectedAnswer) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
        score++; // Increment score if answer is correct
    } else {
        resultElement.textContent = "Incorrect!";
        resultElement.style.color = "red";
    }
}

// Function to display the score
function displayScore() {
    let scoreElement = document.getElementById("score");
    scoreElement.textContent = `Score: ${score} / ${totalQuestions}`;
}
