"use strict";

var _winningCombinations = require("/data/winning-combinations.js");

// Variables
var tokenSpace = document.getElementsByClassName("playing-grid__token-space");
var whoIsCurrentPlayer = document.getElementById("current-player");
var whoIsWinner = document.getElementById("winner");
var currentPlayer = 1; // // Functions

var onGridSquareClick = function onGridSquareClick(event, index) {
  if (event.target.classList.contains("allowed")) {
    if (currentPlayer == 1) {
      event.target.classList.add("player-one");
      tokenSpace[index - 7].classList.add("allowed");
      event.target.classList.remove("allowed");
      currentPlayer = 2;
      whoIsCurrentPlayer.innerHTML = "Player ".concat(currentPlayer, "'s turn");
      whoIsCurrentPlayer.classList.remove("player-one-turn");
      whoIsCurrentPlayer.classList.add("player-two-turn");
      checkForWinner();
    } else if (currentPlayer == 2) {
      event.target.classList.add("player-two");
      tokenSpace[index - 7].classList.add("allowed");
      event.target.classList.remove("allowed");
      currentPlayer = 1;
      whoIsCurrentPlayer.innerHTML = "Player ".concat(currentPlayer, "'s turn");
      whoIsCurrentPlayer.classList.remove("player-two-turn");
      whoIsCurrentPlayer.classList.add("player-one-turn");
      checkForWinner();
    }
  } else {
    alert("Token must be placed at the bottom of the grid!");
  }

  ;
};

var checkForWinner = function checkForWinner() {
  for (var index = 0; index < _winningCombinations.winningCombinationsArrays.length; index++) {
    // console.log(winningCombinationsArrays[index][0]);
    var tokenOne = tokenSpace[_winningCombinations.winningCombinationsArrays[index][0]];
    var tokenTwo = tokenSpace[_winningCombinations.winningCombinationsArrays[index][1]];
    var tokenThree = tokenSpace[_winningCombinations.winningCombinationsArrays[index][2]];
    var tokenFour = tokenSpace[_winningCombinations.winningCombinationsArrays[index][3]];

    if (tokenOne.classList.contains("player-one") && tokenTwo.classList.contains("player-one") && tokenThree.classList.contains("player-one") && tokenFour.classList.contains("player-one")) {
      whoIsCurrentPlayer.innerHTML = "";
      whoIsWinner.innerHTML = "Player One is the winner!";
      whoIsWinner.classList.add("player-one-turn");
    }

    if (tokenOne.classList.contains("player-two") && tokenTwo.classList.contains("player-two") && tokenThree.classList.contains("player-two") && tokenFour.classList.contains("player-two")) {
      whoIsCurrentPlayer.innerHTML = "";
      whoIsWinner.innerHTML = "Player Two is the winner!";
      whoIsWinner.classList.add("player-two-turn");
    }
  }
}; // Logic


var _loop = function _loop(index) {
  tokenSpace[index].addEventListener("click", function () {
    onGridSquareClick(event, index);
  });
};

for (var index = 0; index < tokenSpace.length; index++) {
  _loop(index);
} // IS THERE A WAY TO USE/REFERENCE THIS INDEX IN THE onGridSquareClick FUNCTION???
// E.g.
// for (let index = 0; index < tokenSpace.length; index++) {
//   tokenSpace[index].onclick = (event) => {
//     console.log("This function works");
//     event.target.classList.add("player-one");
//     console.log(index);
//     event.target.innerHTML = index;
//   };
// };
// Only grid squares with the class of 'allowed' are allowed to be clicked. Create an alert if not
// After each allowed turn, the grid square is given class of player-one or player-two and the turn changes between player 1 and player 2
// When an allowed grid square is clicked, the 'allowed' class is removed from that square and a new class of 'allowed' is added to the square above. Can do this by subtracting 7 from the index value of the square
// Figure out how determine winner!
// Create an array of winning combinations of spaces. This will be an array of arrays
// After each turn a checkForWinner function is called
// checkForWinner function will map through the arrays and if player-one or player-two class is in the token spaces of one of the winning arrays, then winner innerhtml is changed. Can also add confetti??