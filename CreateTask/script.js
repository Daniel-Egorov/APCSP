const rps = ["rock", "paper", "scissors"]; // used for computer to randomly choose rock paper or scissors
const computerWins = []; // keep track of how many times computer wins with what object
const userWins = []; // keep track of how many times user wins with what object

function getOccurrences(array, value) {
  // check how many times a value appears in an array
  amount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      amount++;
    }
  }
  return amount;
}

function RPS() {
  // computer randomly choose rock paper or scissors
  const rand = Math.floor(Math.random() * 3);
  return rps[rand];
}

function userWin(user, computer) {
  // check the outcome of the game based on the user's choice and computer's choice
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

playButton.addEventListener("click", function () {
  // the code below runs when the user clicks the play button
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
