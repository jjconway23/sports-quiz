const highScoreList = document.getElementById("high-scores-list");
const highScores = JSON.parse( localStorage.getItem("highScores")) || [];