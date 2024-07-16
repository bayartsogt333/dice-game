// toglogciin eeljig hadgalah huwisagc negdvger toglogc 0, hoyrdugar toglgc 1
var activePlayer = 0;

// toglogciin tsugluulsan onoog hadgalah huwisagc
var scores = [0, 0];

// toglogciin eeljinde tsugluulj bui onoog hadgalah huwisagc.
var roundScore = 0;


// programm ehlew.
document.getElementById("score-0").textContent = 0
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;


{/* <img src="dice-5.png" alt="Dice" class="dice"> */ }
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// Shoonii ali talaar busnig hadgalah huwisagc 1-6 gsn utgiig ene huwisagcid sanamsargv vvsgej ogno. 
document.querySelector(".btn-roll").addEventListener("click", function () {
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
});