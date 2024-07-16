//shooni zurgiig vzvvleh. 
var diceDom = document.querySelector(".dice");
var activePlayer, scores, roundScore, isGameOver;

function initGame() {
    // toglogciin eeljig hadgalah huwisagc negdvger toglogc 0, hoyrdugar toglgc 1
    activePlayer = 0;

    // toglogciin tsugluulsan onoog hadgalah huwisagc
    scores = [0, 0];
    // toglogciin eeljinde tsugluulj bui onoog hadgalah huwisagc.
    roundScore = 0;
    diceDom.style.display = "none";

    isGameOver = false;

    //toglogcdiin neriig shinecleh 
    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";

    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    // programm ehlew.
    document.getElementById("score-0").textContent = 0
    document.querySelector("#score-1").textContent = 0;
    document.querySelector("#current-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;
};
initGame();



// shoog shideh event listener 
document.querySelector(".btn-roll").addEventListener("click", function () {
    if (!isGameOver) {
        // 1 - 6 dotor sanamsrgv too vvsgew.
        var diceNumber = Math.floor(Math.random() * 6) + 1;

        // shooni zurgiig web deer gargaj tawiw. 
        diceDom.style.display = "block";
        diceDom.src = "dice-" + diceNumber + ".png";

        // buusan too 1s ylgt bol idewhtei toglogciin eeljiin onoog nemne.
        if (diceNumber !== 1) {
            roundScore += diceNumber;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        } else {
            switchToNextPlayer();
        }
    } else {
        alert("Togloom duussan.");
    }
});

// hold towcnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
    if (!isGameOver) {
        scores[activePlayer] += roundScore;
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 20) {
            document.getElementById("name-" + activePlayer).textContent = "Winner!!!";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            isGameOver = true;
        } else {
            switchToNextPlayer();
        }
    } else {
        alert("Togloom duussan.");
    }
});


document.querySelector(".btn-new").addEventListener("click", initGame);


// ene function togloh erhig daraagih lu shiljvvlne. 
function switchToNextPlayer() {
    roundScore = 0;
    diceDom.style.display = "none";
    document.getElementById("current-" + activePlayer).textContent = 0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    activePlayer = activePlayer == 0 ? 1 : 0;
}