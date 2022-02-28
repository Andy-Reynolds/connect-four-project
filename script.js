import { winningCombinationsArrays } from "/data/winning-combinations.js";
import confetti from "/node_modules/canvas-confetti/dist/confetti.module.mjs";

// Variables
const tokenSpace = document.getElementsByClassName("playing-grid__token-space");
const whoIsCurrentPlayer = document.getElementById("current-player");
const whoIsWinner = document.getElementById("winner");
const playAgainButton = document.getElementById("play-again-button");

let currentPlayer = 1;


// // Functions
const onGridSquareClick = (event, index) => {
  if (event.target.classList.contains("allowed")) {
    if (currentPlayer == 1) {
      event.target.classList.add("player-one");
      tokenSpace[index-7].classList.add("allowed");
      event.target.classList.remove("allowed");
      currentPlayer = 2;
      whoIsCurrentPlayer.innerHTML = `Player ${currentPlayer}'s turn`;
      whoIsCurrentPlayer.classList.remove("player-one-turn");
      whoIsCurrentPlayer.classList.add("player-two-turn");
      checkForWinner();
    } else if (currentPlayer ==2) {
      event.target.classList.add("player-two");
      tokenSpace[index-7].classList.add("allowed");
      event.target.classList.remove("allowed");
      currentPlayer = 1;
      whoIsCurrentPlayer.innerHTML = `Player ${currentPlayer}'s turn`;
      whoIsCurrentPlayer.classList.remove("player-two-turn");
      whoIsCurrentPlayer.classList.add("player-one-turn");
      checkForWinner();
    }
  } else {
    alert("Token must be placed at the bottom of the grid!");
  };
}

const checkForWinner = () => {
  for (let index = 0; index < winningCombinationsArrays.length; index++) {
    // console.log(winningCombinationsArrays[index][0]);
    let tokenOne = tokenSpace[winningCombinationsArrays[index][0]];
    let tokenTwo = tokenSpace[winningCombinationsArrays[index][1]];
    let tokenThree = tokenSpace[winningCombinationsArrays[index][2]];
    let tokenFour = tokenSpace[winningCombinationsArrays[index][3]];

    if (
      tokenOne.classList.contains("player-one") && 
      tokenTwo.classList.contains("player-one") && 
      tokenThree.classList.contains("player-one") && 
      tokenFour.classList.contains("player-one")
      ) {
      whoIsCurrentPlayer.innerHTML = "";  
      whoIsWinner.innerHTML = "Player One is the winner!";
      whoIsWinner.classList.add("player-one-turn");
      removeAllowedSpaces();
      playAgainButton.style.display = "inline";
      // confetti();
    } if (
      tokenOne.classList.contains("player-two") && 
      tokenTwo.classList.contains("player-two") && 
      tokenThree.classList.contains("player-two") && 
      tokenFour.classList.contains("player-two")
    ) {
      whoIsCurrentPlayer.innerHTML = "";  
      whoIsWinner.innerHTML = "Player Two is the winner!";
      whoIsWinner.classList.add("player-two-turn");
      removeAllowedSpaces();
      playAgainButton.style.display = "inline";
      // confetti();
    }
  }
}

const onPlayAgainClick = (event) => {
  removeAllowedSpaces();
  removePlayingTokens();

  for (let index = 35; index < tokenSpace.length; index++) {
    tokenSpace[index].classList.add("allowed");
  };

  currentPlayer = 1;
  whoIsWinner.classList.remove("player-one-turn");
  whoIsWinner.classList.remove("player-two-turn");
  whoIsWinner.innerHTML = "";
  whoIsCurrentPlayer.innerHTML = `Player ${currentPlayer}'s turn`;
  whoIsCurrentPlayer.classList.remove("player-two-turn");
  whoIsCurrentPlayer.classList.add("player-one-turn");
  playAgainButton.style.display = "none";

};

const removeAllowedSpaces = (event) => {
  for (let index = 0; index < tokenSpace.length; index++) {
    tokenSpace[index].classList.remove("allowed");
  };
};

const removePlayingTokens = (event) => {
  for (let index = 0; index < tokenSpace.length; index++) {
    tokenSpace[index].classList.remove("player-one");
    tokenSpace[index].classList.remove("player-two");
  };
};




// Logic
for (let index = 0; index < tokenSpace.length; index++) {
  tokenSpace[index].addEventListener("click", () => onGridSquareClick(event, index));
}

playAgainButton.addEventListener("click", onPlayAgainClick);