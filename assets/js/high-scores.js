const highScoreList = document.getElementById("high-scores-list");
const highScores = JSON.parse( localStorage.getItem("highScores")) || [];
highScoreList.innerHTML = highScores.map( score => {
    return `<li class= "score-items">${score.name} : ${score.score}</li>`
}).join("")