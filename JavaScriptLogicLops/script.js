//Random number
var rand = Math.floor(Math.random()*10)+1;
window.alert("A random number between 1-10 is: " + rand);

//Area of a circle
var r = prompt("What is the radius?", rand);
var area = Math.PI * Math.pow(r, 2);
alert("The area is " + area.toFixed(2) + " units^2");
//window.prompt("") --> prompt("")
