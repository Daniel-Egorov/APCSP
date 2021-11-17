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
    totalGames ++;
    var guessCount = 1;
    var lowestGuesses;
    var rand = Math.floor(Math.random() * 100) + 1;

    var guess = parseInt(prompt('Guess a number 1-100', rand));
    
    while (guess !== rand) {
        let returnString = '';
        if (isNaN(guess)) {
            guess = parseInt(prompt("Invalid input, guess again!", rand));
            continue;
        }
        else if (guess < rand) {
            returnString = "Too low, guess again!";
        }
        else if (guess > rand) {
            returnString = "Too high, guess again!";
        }
        
        distance = Math.abs(rand - guess);  
        if (distance < 6) {
            returnString += " Really Hot!";
        }
        else if (distance < 11) {
            returnString += " Hot!";
        }
        else if (distance < 31) {
            returnString += " Warm!";
        }
        else if (distance < 41) {
            returnString += " Cold!";
        }
        else if (distance >= 41) {
            returnString += " Really Cold!";
        }
        guess = parseInt(prompt(returnString, rand));
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