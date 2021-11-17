// really hot = 5
// hot = 10
// warm = 20
// cold = 30
// really cold = 40
var userName = prompt("What is your name?");
userName = userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase();
alert(`Welcome, ${userName}!`);

confirmed = confirm('Would you like to play a game?');
var totalGames = 0;
var totalScore = 0;

while (confirmed === true) {
    totalGames++;
    var guessCount = 1;
    var lowestGuesses;
    var rand = Math.floor(Math.random() * 100) + 1;

    var guess = parseInt(prompt('Guess a number 1-100'));
    
    while (guess !== rand) {
        let returnString = '';
        if (isNaN(guess)) {
            guess = parseInt(prompt("Invalid input, guess again!"));
            continue;
        }
        else if (guess < rand) {
            returnString = "Too low, guess again!";
        }
        else if (guess > rand) {
            returnString = "Too high, guess again!";
        }

        var distance = Math.abs(rand - guess);  
        // if the guess is within 5
        if (distance < 6) {
            returnString += " Really Hot!";
        }
        // if the guess is within 6 - 10
        else if (distance < 11) {
            returnString += " Hot!";
        }
        // if the guess is within 11 - 30
        else if (distance < 31) {
            returnString += " Warm!";
        }
        // if the guess is within 31 - 40
        else if (distance < 41) {
            returnString += " Cold!";
        }
        // if the guess is within 41+
        else if (distance >= 41) {
            returnString += " Really Cold!";
        }
        guess = parseInt(prompt(returnString));
        guessCount++;
    }

    if (!lowestGuesses) {
        lowestGuesses = guessCount;
    }
    else if (guessCount < lowestGuesses) {
        lowestGuesses = guessCount;
    }
    totalScore += guessCount;
    confirmed = confirm(`${userName}, you guessed it!
Your score was ${guessCount} guess(es).
Your best score was ${lowestGuesses} guess(es).
Would you like to play again?`);
}

avgScore = totalScore / totalGames;

alert(`${userName}, Your average score was ${avgScore.toFixed(2)} guesses
Have a good day!`);