
// Variables
const tokenSpace = document.getElementsByClassName("playing-grid__token-space");
const whoIsCurrentPlayer = document.getElementById("current-player");
const whoIsWinner = document.getElementById("winner");

let currentPlayer = 1;

const winningCombinationsArrays = [
  // Horizontal
  [0,1,2,3],
  [1,2,3,4],
  [2,3,4,5],
  [3,4,5,6],
  [7,8,9,10],
  [8,9,10,11],
  [9,10,11,12],
  [10,11,12,13],
  [14,15,16,17],
  [15,16,17,18],
  [16,17,18,19],
  [17,18,19,20],
  [21,22,23,24],
  [22,23,24,25],
  [23,24,25,26],
  [24,25,26,27],
  [28,29,30,31],
  [29,30,31,32],
  [30,31,32,33],
  [31,32,33,34],
  [35,36,37,38],
  [36,37,38,39],
  [37,38,39,40],
  [38,39,40,41],
];

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
      whoIsWinner.innerHTML = "Player One is the winner!";
      whoIsWinner.classList.add("player-one-turn");
    } if (
      tokenOne.classList.contains("player-two") && 
      tokenTwo.classList.contains("player-two") && 
      tokenThree.classList.contains("player-two") && 
      tokenFour.classList.contains("player-two")
    ) {
      whoIsWinner.innerHTML = "Player Two is the winner!";
      whoIsWinner.classList.add("player-two-turn");
    }
  }
}


// Logic
for (let index = 0; index < tokenSpace.length; index++) {
  tokenSpace[index].addEventListener("click", function () {onGridSquareClick(event, index)});
}
// IS THERE A WAY TO USE/REFERENCE THIS INDEX IN THE onGridSquareClick FUNCTION???

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