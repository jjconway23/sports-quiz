let answerBtn = Array.from(document.getElementsByClassName("answer-btn"));
let presentQuestion = {}; 
let acceptingAnswers = false;
let counter = 0;
let remainingQuestions = [];
const maxQuestions = 11 
const topFive = 5
let questionIncrement = 1;
let playerScore = 0;
let questions = [];
let questionNumber = 0;

// dom selectors

const startGameBtn = document.getElementById("start-game")
const welcomePage = document.getElementById("welcome-page");
const gameNav = document.querySelector(".game-nav");
const questionsDiv = document.getElementById("questions-div")
const timer = document.getElementById("timer");
let gameScore = document.querySelectorAll(".game-score")[0];
let gameScoreFinale = document.querySelector(".results-score");
let quizQuestionNumber = document.getElementById("quiz-question-number");
let quizQuestion = document.getElementById("quiz-question");
const playAgainButton = document.getElementById("play-again-button");
const resultsPage = document.getElementById("results-page");
let progress = document.getElementById("progress")
let loader = document.getElementById("loader")
let gamesContainer = document.querySelector(".games-container")
// quiz question buttons
let optionOne = document.getElementById("option-1-btn");
let optionTwo = document.getElementById("option-2-btn");
let optionThree = document.getElementById("option-3-btn");
let optionFour = document.getElementById("option-4-btn");
let nextBtn = document.getElementById("next-btn");
let checkResultsBtn = document.getElementById("check-results");

