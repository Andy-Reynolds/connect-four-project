"use strict";

var _winningCombinations = require("/data/winning-combinations.js");

var _confettiModule = _interopRequireDefault(require("/node_modules/canvas-confetti/dist/confetti.module.mjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Variables
var tokenSpace = document.getElementsByClassName("playing-grid__token-space");
var whoIsCurrentPlayer = document.getElementById("current-player");
var whoIsWinner = document.getElementById("winner");
var playAgainButton = document.getElementById("play-again-button");
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
      removeAllowedSpaces();
      playAgainButton.style.display = "inline"; // confetti();
    }

    if (tokenOne.classList.contains("player-two") && tokenTwo.classList.contains("player-two") && tokenThree.classList.contains("player-two") && tokenFour.classList.contains("player-two")) {
      whoIsCurrentPlayer.innerHTML = "";
      whoIsWinner.innerHTML = "Player Two is the winner!";
      whoIsWinner.classList.add("player-two-turn");
      removeAllowedSpaces();
      playAgainButton.style.display = "inline"; // confetti();
    }
  }
};

var onPlayAgainClick = function onPlayAgainClick(event) {
  removeAllowedSpaces();
  removePlayingTokens();

  for (var index = 35; index < tokenSpace.length; index++) {
    tokenSpace[index].classList.add("allowed");
  }

  ;
  currentPlayer = 1;
  whoIsWinner.classList.remove("player-one-turn");
  whoIsWinner.classList.remove("player-two-turn");
  whoIsWinner.innerHTML = "";
  whoIsCurrentPlayer.innerHTML = "Player ".concat(currentPlayer, "'s turn");
  whoIsCurrentPlayer.classList.remove("player-two-turn");
  whoIsCurrentPlayer.classList.add("player-one-turn");
  playAgainButton.style.display = "none";
};

var removeAllowedSpaces = function removeAllowedSpaces(event) {
  for (var index = 0; index < tokenSpace.length; index++) {
    tokenSpace[index].classList.remove("allowed");
  }

  ;
};

var removePlayingTokens = function removePlayingTokens(event) {
  for (var index = 0; index < tokenSpace.length; index++) {
    tokenSpace[index].classList.remove("player-one");
    tokenSpace[index].classList.remove("player-two");
  }

  ;
}; // Logic


var _loop = function _loop(index) {
  tokenSpace[index].addEventListener("click", function () {
    return onGridSquareClick(event, index);
  });
};

for (var index = 0; index < tokenSpace.length; index++) {
  _loop(index);
}

playAgainButton.addEventListener("click", onPlayAgainClick);