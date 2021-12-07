const rps = ["rock", "paper", "scissors"]; // used for computer to randomly choose rock paper or scissors
const computerWins = []; // keep track of how many times computer wins with what object
const userWins = []; // keep track of how many times user wins with what object

/**
 * Get occurrences of a value in an array
 * @param {Array} array - any array to search through
 * @param {*} value - value to search for in array
 * @returns {number} amount - amount of times {value} appears in {array}
 */
function getOccurrences(array, value) {
  let amount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      amount++;
    }
  }
  return amount;
}

/**
 * Randomly choose object for computer
 * @returns {string} "rock" "paper" or "scissors"
 */
function RPS() {
  const rand = Math.floor(Math.random() * 3);
  return rps[rand];
}

let resultText = document.getElementById("resultText"); // text to tell user outcome of the game
let userStats = document.getElementById("userStats"); // text to tell user their stats
let computerStats = document.getElementById("computerStats"); // text to tell user the computer's stats
let userInput = document.getElementById("textField"); // text field for user to input their choice
let playButton = document.getElementById("playButton"); // button for user to confirm their choice

/**
 * Function to run every time the user clicks {playButton}
 * @param {string} user - the user's input of either rock, paper, or scissors
 * @param {string} computer - the computers choice of either rock, paper, or scissors
 */
function onClick(user, computer) {
  user = user.toLowerCase();
  let outcome;

  if (user === computer) {
    // if they chose the same object
    outcome = "tied";
  } else if (
    (user === "rock" && computer === "paper") ||
    (user === "paper" && computer === "scissors") ||
    (user === "scissors" && computer === "rock")
  ) {
    // if the user chose any object that would lose to the computer's object
    computerWins.push(computer);
    outcome = "lost";
  } else {
    // otherwise, the user has won
    userWins.push(user);
    outcome = "won";
  }

  resultText.innerHTML = `You ${outcome}! The computer played ${computer}.`;

  userStats.innerHTML = `~Your wins~ <br>
  Rock: ${getOccurrences(userWins, "rock")} <br>
  Paper: ${getOccurrences(userWins, "paper")} <br>
  Scissors: ${getOccurrences(userWins, "scissors")}`;

  computerStats.innerHTML = `~Computer wins~ <br>
  Rock: ${getOccurrences(computerWins, "rock")} <br>
  Paper: ${getOccurrences(computerWins, "paper")} <br>
  Scissors: ${getOccurrences(computerWins, "scissors")}`;
}

/**
 * Line 79 runs every time the user clicks {playButton}
 */
playButton.addEventListener("click", function () {
  onClick(userInput.value, RPS());
});
