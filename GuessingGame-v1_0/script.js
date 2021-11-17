/*
    Project: GuessingGame-v1_0
    Author: Daniel Egorov
    Description: 
        this guessing game allows the user to guess a number between 1 and 100
        it will display their average score and best score (lowest guesses)
        while guessing, it will tell the user if they are hot or cold (close or far from the number)
    Above && Beyond Features:
        - stores the user's game stats to enable all time averages and best scores
        - displays to the user their median score

*/
var userName = prompt("What is your name?");
userName = userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase();
alert(`Welcome, ${userName}!`);

/* THIS CODE WILL ALLOW USER TO ERASE ALL THEIR PAST DATA */
// if (confirm(`${userName}, would you like to clear all your data?`)) localStorage.clear();

var userData = JSON.parse(localStorage.getItem("userData"));

confirmed = confirm('Would you like to play a game?');
if (!userData) {
    userData = {
        "totalGames": 0,
        "totalScore": 0,
        "allScores": []
    }
}

while (confirmed === true) {
    userData.totalGames++;
    var guessCount = 1;
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

    if (!userData.minScore) {
        userData.minScore = guessCount;
    }
    else if (guessCount < userData.minScore) {
        userData.minScore = guessCount;
    }
    userData.allScores.push(guessCount);
    userData.totalScore += guessCount;

    var job = '';
    
    if (guessCount < 4) job = "great";
    else if (guessCount < 7) job = "good";
    else job = "bad";

    confirmed = confirm(`${userName}, ${job} job!
    Score: ${guessCount}
    Best Score: ${userData.minScore}
    Games Played: ${userData.totalGames}
    Avg Score: ${(userData.totalScore / userData.totalGames).toFixed(2)}
    Median Score: ${median(userData.allScores)}
Would you like to play again?`);
}

alert(`${userName}, Have a good day!`);

localStorage.setItem('userData', JSON.stringify(userData));

function median(array) {
    array = bubbleSort(array);
    if (array.length % 2 === 0) {
        let num1 = array[array.length / 2];
        let num2 = array[(array.length / 2) - 1];
        return ((num1 + num2) / 2).toFixed(2);
    }
    else {
        return array[Math.floor(array.length / 2)];
    }
}

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}