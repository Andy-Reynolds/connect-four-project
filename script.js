
// Variables
const tokenSpace = document.getElementsByClassName("playing-grid__token-space");


// // Functions
const onGridSquareClick = (event, index) => {
  if (event.target.classList.contains("allowed")) {
    event.target.classList.add("player-one");
    tokenSpace[index-7].classList.add("allowed");
    console.log(index);
    event.target.innerHTML = index;
  } else {
    alert("Not allowed");
  };
  
  // event.target.classList.add("player-one");
  // tokenSpace[index-7].classList.add("player-one");
  // console.log(index);
  // event.target.innerHTML = index;
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