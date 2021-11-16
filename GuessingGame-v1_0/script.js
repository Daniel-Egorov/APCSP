var userName = prompt("What is your name?");
userName = userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase();
alert(`Welcome, ${userName}!`);

confirmed = confirm('Would you like to play a game?');

while (confirmed === true) {
    var guessCount = 1;
    var lowestGuesses;
    var rand = Math.floor(Math.random() * 100) + 1;

    var guess = parseInt(prompt('Guess a number 1-100'));
    
    while (guess !== rand) {
        if (isNaN(guess)) {
            guess = parseInt(prompt("Invalid input, guess again!"));
            continue;
        }
        else if (guess < rand) {
            guess = parseInt(prompt("Too low, guess again!"));
        }
        else if (guess > rand) {
            guess = parseInt(prompt("Too high, guess again!"));
        }
        guessCount++;
    }

    if (!lowestGuesses) {
        lowestGuesses = guessCount;
    }
    else if (guessCount < lowestGuesses) {
        lowestGuesses = guessCount;
    }
    
    confirmed = confirm(`${userName}, you guessed it!
Your score was ${guessCount} guess(es).
Your best score was ${lowestGuesses} guess(es).
Would you like to play again?`);
}

alert(`Have a good day, ${userName}!`);