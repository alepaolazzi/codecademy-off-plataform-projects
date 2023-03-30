let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generate a random integer
const generateTarget = () => Math.floor(Math.random() * 10);

// Determine which guess is closet to the target number
function compareGuesses(userGuess, computerGuess, secretTarget) {
  let result;
  let userDistance = Math.abs(userGuess - secretTarget);
  let computerDistance = Math.abs(computerGuess - secretTarget);

  if (userDistance === computerDistance) {
    result = true;
  } else if (userDistance < computerDistance) {
    result = true;
  } else if (computerDistance < userDistance) {
    result = false;
  } else {
    result = null;
  }
  return result;
}

// update the round winner's score by 1
const updateScore = (winner) =>
  winner === 'human' ? humanScore++ : computerScore++;

// Increase the value of current round number by 1
const advanceRound = () => currentRoundNumber++;
