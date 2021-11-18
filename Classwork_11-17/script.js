//create a program that asks a user for the length of a password and then creates and alerts a random password of that length 

//use String.fromCharCode()

length = parseInt(prompt("what do you want the length of your password to be"));

pw = '';
for (let i = 0; i < length; i++) {
  var num = Math.floor(Math.random() * 94) + 33
  pw += String.fromCharCode(num);
}

alert(pw);