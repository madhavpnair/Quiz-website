//score variable to keep track of the score
let score = 0;
const totalQuestions = 3; 

// Question 1
document.querySelectorAll("#question1 .answerButton").forEach(function(button) {
    button.addEventListener("click", function() {
        checkAnswer("1939", button.textContent.trim(), "result1");
        displayScore();
    });
});

// Question 2
document.querySelectorAll("#question2 .answerButton").forEach(function(button) {
    button.addEventListener("click", function() {
        checkAnswer("Punjab", button.textContent.trim(), "result2");
        displayScore();
        //makeAnimation(this.innerHTML)
    });
});


document.querySelectorAll("#question3 .answerButton").forEach(function(button) {
    button.addEventListener("click", function() {
        checkAnswer("Chandraguptha Maurya", button.textContent.trim(), "result3");
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


// function makeAnimation(currentKey) {
//     var activeButton = document.querySelector("#b" + currentKey.slice(0,1));
//     activeButton.classList.add("pressed");
//     setTimeout(function () {
//         activeButton.classList.remove("pressed");
//     }, 100);
// }
