const startGameBtn = document.querySelector("#start-game");
const welcomePage = document.querySelector("#welcome-page");
const questionsDiv = document.querySelector("#questions-div")
const timer = document.querySelector("#timer");
const quizQuestionNumber = document.querySelector("#quiz-question-number");
const quizQuestion = document.querySelector("#quiz-question");
const playAgainButton = document.querySelector("#play-again-button");
const resultsPage = document.querySelector("#results-page");
const progress = document.querySelector("#progress");
const loader = document.querySelector("#loader");
const nextBtn = document.querySelector("#next-btn");
const checkResultsBtn = document.querySelector("#check-results");
const answerBtn = Array.from(document.getElementsByClassName("answer-btn"));
const recentScore = localStorage.getItem("recentScore");
const gamesContainer = document.querySelector(".games-container");
const gameNav = document.querySelector(".game-nav");
const gameScore = document.querySelectorAll(".game-score")[0];
const gameScoreFinale = document.querySelector(".results-score");
const maxQuestions = 11 ;
const topFive = 5;
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let username = document.getElementById("username");
let saveBtn = document.getElementById("save-btn");
let questions = [];
let presentQuestion = {}; 
let remainingQuestions = [];
let acceptingAnswers = false;
let counter = 0;
let questionIncrement = 1;
let playerScore = 0;
let questionNumber = 0;
let nextQuestionTimeOut;
let checkResultsTimeOut;




startGameBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", nextQuestion);
checkResultsBtn.addEventListener("click", checkResults);
playAgainButton.addEventListener("click", playAgain);

/**
 * starts game
 */
function startGame() {
    welcomePage.style.display = "none";
    gameNav.style.display = "flex";
    questionsDiv.style.display = "block";
    remainingQuestions = [... questions];
    gameScore.textContent = playerScore;
    startTimer()
    nextQuestion();
    loader.classList.add("hide");
    gamesContainer.classList.remove("hide");

}

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
/**
 * Starts Timer
 */
function startTimer() {
    
    let date = new Date();
    date.setSeconds(date.getSeconds() + 600);
    let countDownDate = date.getTime();    
    let time = setInterval(function() {        
        let now = new Date().getTime();        
        let distance = countDownDate - now;        
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);        
        document.getElementById("timer").innerHTML =
            minutes + "m " + seconds + "s ";        
        if (distance < 0) {
            clearInterval(time);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}

/**
 * checks whether button user clicked is the correct answer
 * displays next button once user clicks an answer button
 * displays check results button once finally question has been answered
 * decides what class to apply to the button whether user has chosen the correct answer or not
 */
answerBtn.forEach( choice => {
    gameScore.textContent = playerScore
    choice.addEventListener("click", e => {
        if(!acceptingAnswers)return;
        acceptingAnswers = false;
        const choiceSelected = e.target;
        const answerSelected = choiceSelected.dataset ['number'];
        const classToApply = answerSelected == presentQuestion.answer ? "success" : "fail"
        
        if (counter < 10){
            nextBtn.style.display = "block";
            nextQuestionTimeOut = 
                setTimeout( () => {
                    nextQuestion()
                    choiceSelected.classList.remove(classToApply);
                }, 3000);
            
        }else if (counter >= 10){
            checkResultsBtn.style.display = "block";
            nextBtn.style.display = "none";
            checkResultsTimeOut =
                setTimeout( () => {
                    checkResults()
                    choiceSelected.classList.remove(classToApply);
                }, 3000);
                
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
/**
 * clears timeout hooked onto the next quesiton button
 * sets next question and relevent answer choices
 * increments question number and counter
 */
function nextQuestion() {
    clearTimeout(nextQuestionTimeOut);
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
/**
 * displays the check results page
 * sets users recent score to the local storage
 */
function checkResults() {
    clearTimeout(checkResultsTimeOut)
    gameScoreFinale.textContent = playerScore
    questionsDiv.style.display = "none";
    resultsPage.style.display = "block";
    if(checkResultsBtn.style.display === "block"){
        localStorage.setItem("recentScore", playerScore);
    }
}

gameScoreFinale.textContent = recentScore

username.addEventListener("keyup", function (){ 
    saveBtn.disabled = !username.value  
    
  })
  saveScore = (event) => {
      event.preventDefault();
  
      const score = {
          score: localStorage.getItem("recentScore"),
          name: username.value
          
          
      }
      highScores.push(score);
      highScores.sort( (a,b) => b.score - a.score);
      highScores.splice(5);
  
      localStorage.setItem("highScores" , JSON.stringify(highScores));
  
    
    window.location.href="index.html"
  
  }
  /**
   * starts game again when play again button is clicked
   */
  function playAgain() {
    window.location.href="game.html"
  }
  