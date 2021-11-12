//Random number
var rand = Math.floor(Math.random()*10)+1;
var guess = parseInt(prompt("Guess a number 1-10"));

if (guess == rand) {
    alert("You guessed it!!!");
}
else if (guess < rand) {
    alert("Oops! Too low!");
}
else {
    alert("Darn! Too high!");
}

var radius = parseFloat(prompt("What is the radius of your circle?"));
alert(`${userName}, the area of your circle is ${(Math.PI * Math.pow(radius, 2)).toFixed(2)}`);