"use strict";

// Variables
var tokenSpace = document.getElementsByClassName("playing-grid__token-space"); // Functions

var onGridSquareClick = function onGridSquareClick(event) {
  console.log("This function works");
  event.target.classList.add("player-one");
}; // Logic


for (var index = 0; index < tokenSpace.length; index++) {
  tokenSpace[index].addEventListener("click", onGridSquareClick);
} // Only grid squares with the class of 'allowed' are allowed to be clicked. Create an alert if not
// After each allowed turn, the grid square is given class of player-one or player-two and the turn changes between player 1 and player 2
// When an allowed grid square is clicked, the 'allowed' class is removed from that square and a new class of 'allowed' is added to the square above. Can do this by subtracting 7 from the value of the square
// Figure out how determine winner!