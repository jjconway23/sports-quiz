const startGameBtn = document.getElementById("start-game");
const welcomePage = document.getElementById("welcome-page");
const gameNav = document.querySelector(".game-nav");
const questionsDiv = document.getElementById("questions-div")
const timer = document.getElementById("timer");
const gameScore = document.querySelectorAll(".game-score")[0];
const gameScoreFinale = document.querySelector(".results-score");
const quizQuestionNumber = document.getElementById("quiz-question-number");
const quizQuestion = document.getElementById("quiz-question");
const playAgainButton = document.getElementById("play-again-button");
const resultsPage = document.getElementById("results-page");
const progress = document.getElementById("progress");
const loader = document.getElementById("loader");
const gamesContainer = document.querySelector(".games-container");
const nextBtn = document.getElementById("next-btn");
const checkResultsBtn = document.getElementById("check-results");
const answerBtn = Array.from(document.getElementsByClassName("answer-btn"));
const maxQuestions = 11 ;
const topFive = 5;
let questions = [];
let presentQuestion = {}; 
let acceptingAnswers = false;
let counter = 0;
let remainingQuestions = [];
let questionIncrement = 1;
let playerScore = 0;
let questionNumber = 0;




// Game Page Event Listeners
startGameBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", nextQuestion);
checkResultsBtn.addEventListener("click", checkResults);
playAgainButton.addEventListener("click", playAgain);

// Game Page Functions
// starts game upon clicking start game button
function startGame() {
    welcomePage.style.display = "none";
    gameNav.style.display = "flex";
    questionsDiv.style.display = "block";
    remainingQuestions = [... questions];
    gameScore.textContent = playerScore;
    gameStats();
    nextQuestion();
    loader.classList.add("hide");
    gamesContainer.classList.remove("hide");

}
// fetch questions from api
fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple")
.then((res) => {
    return res.json();
})
.then((apiQuestions) => {
    questions = apiQuestions.results.map((apiQuestion) => {
        const editedQuestion = {
            question: apiQuestion.question,
        };

        const answerOptions = [...apiQuestion.incorrect_answers];
        editedQuestion.answer = Math.floor(Math.random() * 4) + 1;
        answerOptions.splice(editedQuestion.answer - 1, 0, apiQuestion.correct_answer);

        answerOptions.forEach((choice, index) => {
            editedQuestion['choice' + (index + 1)] = choice;
        });

        return editedQuestion;
    });
    startGame();
})
.catch((err) => {
    console.error(err);
});
// starts timer and sets player score to 0
function gameStats() {
    startTimer()   
}
function startTimer() {
    // Set the date we're counting down to
    let date = new Date();
    date.setSeconds(date.getSeconds() + 600);
    var countDownDate = new Date(date).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="timer"
        document.getElementById("timer").innerHTML =
            minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}
// checks if button with correct answer is clicked linked to each answer button

function checkAnswer(answerIndex) {
    if (questions[questionNumber].answers[answerIndex].isCorrect === true) {
        console.log("correct");
        playerScore++
        gameScore.textContent = playerScore

    } else {
        console.log("wrong");
    }
    
}
// function for the next button.

function nextQuestion() {
    
    quizQuestionNumber.innerText = questionIncrement;
    nextBtn.style.display = "none";
    counter++;
    questionIncrement++;
    progress.style.width = `${(questionIncrement / maxQuestions) * 100}%`;
    const questionIndex = Math.floor( Math.random() * remainingQuestions.length);
    presentQuestion = remainingQuestions[questionIndex];
    quizQuestion.innerHTML = presentQuestion.question;
    answerBtn.forEach (choice => {
        const number = choice.dataset["number"];
        choice.innerHTML = presentQuestion["choice" + number] 
    })
    remainingQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};
answerBtn.forEach( choice => {
    gameScore.textContent = playerScore
    choice.addEventListener("click", e => {
        if(!acceptingAnswers)return;
        acceptingAnswers = false;
        const choiceSelected = e.target; // which button was clicked
        const answerSelected = choiceSelected.dataset ['number'];  //dataset number of button clicked
        const classToApply = answerSelected == presentQuestion.answer ? "success" : "fail"
        
        if (counter < 10){
            nextBtn.style.display = "block";
        }else if (counter >= 10){
            checkResultsBtn.style.display = "block";
            nextBtn.style.display = "none";
        }
        
        choiceSelected.classList.add(classToApply)
        if (classToApply === "success"){
            playerScore++
            gameScore.textContent = playerScore;
        }
        nextBtn.addEventListener("click", function () {
            choiceSelected.classList.remove(classToApply);
        })
        
        
    })
})
// Results page
function checkResults() {
    // stop timer
    gameScoreFinale.textContent = playerScore
    questionsDiv.style.display = "none";
    resultsPage.style.display = "block"
    // if(remainingQuestions.length === 0){
    //     localStorage.setItem("recentScore", playerScore);
    // }
    if(checkResultsBtn.style.display === "block"){
        localStorage.setItem("recentScore", playerScore);
    }
}
let username = document.getElementById("username");
let saveBtn = document.getElementById("save-btn")
const recentScore = localStorage.getItem("recentScore");

let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

gameScoreFinale.textContent = recentScore
username.addEventListener("keyup", function (){ 
    saveBtn.disabled = !username.value  
  })
  saveScore = (event) => {
      event.preventDefault();
  
      const score = {
          score: recentScore,
          name: username.value
          
          
      }
      highScores.push(score);
      highScores.sort( (a,b) => b.score - a.score);
      highScores.splice(5);
  
      localStorage.setItem("highScores" , JSON.stringify(highScores));
  
    //   window.location.assign("/")
    window.location.href="index.html"
  
  }
  function playAgain() {
    
    playerScore = 0;
    resultsPage.style.display = "none";
    counter = 0;
    questionIncrement = 1;
    questionNumber = 0;
    gameScore.textContent = playerScore;
    checkResultsBtn.style.display = "none";
    answerBtn.forEach (btn => {
        btn.classList.remove("success");
        btn.classList.remove("fail");
    })
  }
  