//Random number
/*
var userName = prompt("What is your name?");
userName = userName.toUpperCase().charAt(0) + userName.toLowerCase().substring(1);
alert(`Hello ${userName}!`);
var rand = Math.floor(Math.random()*10)+1;
var guess = parseInt(prompt("Guess a number 1-10"));
var age = Number | undefined;

if (guess == rand) {
    alert("You guessed it!!!");
}
else if (guess < rand) {
    alert("Oops! Too low!");
}
else if (guess > rand) {
    alert("Darn! Too high!");
}

var radius = parseFloat(prompt("What is the radius of your circle?"));
alert(`The area of your circle is ${(Math.PI * Math.pow(radius, 2)).toFixed(2)} units squared`);

if (confirm("Would you like to buy tickets to the show?") == true) {
    let numTickets = parseInt(prompt("How many tickets would you like to buy?"));
    let cost = 0;
    let count = 0;

    while (count < numTickets) {
        let age = parseInt(prompt(`How old is guest ${count + 1}?`));
        count++;

        if (age >= 0 && age <= 2) {}
        else if (age <= 12) cost += 10;
        else if (age <= 18 || age >= 65) cost += 15;
        else cost += 30;
    }
    alert(`${userName}, your ${numTickets} ticket(s) will cost $${cost}`);
}

else {
    alert("you suck");
}
*/

var string = prompt("enter string");
var i = 0;
var finString = '';

while (i < string.length) {
    if (Math.random() < .5) {
        finString += string.charAt(i).toUpperCase();
    }
    else {
        finString += string.charAt(i).toLowerCase();
    }
    i++;
}

alert(`Your new string is: ${finString}`);