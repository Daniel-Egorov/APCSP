const rps = ["rock", "paper", "scissors"]; // used for computer to randomly choose rock paper or scissors
const computerWins = []; // keep track of how many times computer wins with what object
const userWins = []; // keep track of how many times user wins with what object

/**
 * Get occurrences of a value in an array
 * @param {Array} array - any array to search through
 * @param {*} value - value to search for in array
 * @returns {int} amount - amount of times {value} appears in {array}
 */
function getOccurrences(array, value) {
  amount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      amount++;
    }
  }
  return amount;
}

/**
 * Randomly choose object for computer
 * @returns {String} "rock" "paper" or "scissors"
 */
function RPS() {
  const rand = Math.floor(Math.random() * 3);
  return rps[rand];
}

/**
 * Get the outcome of the game
 * @param {String} user - what the user chose to play: "rock" "paper" or "scissors"
 * @param {String} computer - what the computer chose to play: "rock" "paper" or "scissors"
 * @returns result of the game: "lost" "won" or "tied"
 */
function userWin(user, computer) {
  user = user.toLowerCase();

  if (user === computer) {
    // if they chose the same object
    return "tied";
  } else if (
    (user === "rock" && computer === "paper") ||
    (user === "paper" && computer === "scissors") ||
    (user === "scissors" && computer === "rock")
  ) {
    // if the user chose any object that would lose to the computer's object
    computerWins.push(computer);
    return "lost";
  } else {
    // otherwise, the user has won
    userWins.push(user);
    return "won";
  }
}

let resultText = document.getElementById("resultText"); // text to tell user outcome of the game
let userStats = document.getElementById("userStats"); // text to tell user their stats
let computerStats = document.getElementById("computerStats"); // text to tell user the computer's stats
let userInput = document.getElementById("textField"); // text field for user to input their choice
let playButton = document.getElementById("playButton"); // button for user to confirm their choice

/**
 * Lines 67-80 run when the user clicks {playButton}
 */
playButton.addEventListener("click", function () {
  computer = RPS();
  let outcome = userWin(userInput.value, computer);

  resultText.innerHTML = `You ${outcome}! The computer played ${computer}.`;

  userStats.innerHTML = `
  You || Rock wins: ${getOccurrences(userWins, "rock")} ||
  Paper wins: ${getOccurrences(userWins, "paper")} ||
  Scissors wins: ${getOccurrences(userWins, "scissors")}`;

  computerStats.innerHTML = `
  Computer || Rock wins: ${getOccurrences(computerWins, "rock")} ||
  Paper wins: ${getOccurrences(computerWins, "paper")} ||
  Scissors wins: ${getOccurrences(computerWins, "scissors")}`;
});
