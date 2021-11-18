var userName = prompt("What is your name?");

// capitalize the first character and lowercase the rest, concatenate the two results
userName = userName.toUpperCase().charAt(0) + userName.toLowerCase().substring(1);

var age = parseInt(prompt("How old are you?"));

var temp = parseInt(prompt("What is the temperature? (Degrees F)"));

var radius = parseFloat(prompt("What is the radius of your circle?"));

// tells user how old they are in dog years, by multiplying age by 7
alert(`${userName}, you are ${age * 7} years old in dog years`);
// tells user degrees F in degrees C by subtracting 32 from temp then multiplying by 5/9
alert(`${userName}, ${temp} degrees Fahrenheit is ${((temp - 32) * (5 / 9)).toFixed(2)} degrees Celsius`);
// tells user area of circle given radius by doing pi * r^2
alert(`${userName}, the area of your circle is ${(Math.PI * Math.pow(radius, 2)).toFixed(2)}`);

var angle = parseFloat(prompt("What is the measurement of your angle?"));

var sideLength = parseFloat(prompt("What is the length of the side opposite to your angle?"));

var hypotenuse = (sideLength / Math.sin(angle)).toFixed(2);

if (hypotenuse <= 0) {
  alert(`${userName}, your triangle is invalid`);
} else {
  alert(`${userName}, the length of your hypotenuse is ${(sideLength / Math.sin(angle)).toFixed(2)}`);
}
