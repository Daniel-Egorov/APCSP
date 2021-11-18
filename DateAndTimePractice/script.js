var d = new Date(); //new keyword creates an object from the class

var ampm = "am";
var hours = d.getHours();
var minutes = d.getMinutes();
var date = d.getDate().toString();
var year = d.getFullYear();
var day = d.getDay();
var month = d.getMonth();

switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
switch (month) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "December";
    break;
}

switch (date.charAt(-1)) {
  case "1":
    date += "st";
    break;
  case "2":
    date += "nd";
    break;
  case "3":
    date += "rd";
    break;
  default:
    date += "th";
    break;
}

if (hours > 12) {
  hours -= 12;
  ampm = "pm";
}
else if (hours === 0) {
  hours = 12;
}

if (minutes < 10) {
  minutes = `0${minutes}`;
}

returnString = `Today is ${day}, ${month} ${date}, ${year}. The time is ${hours}:${minutes} ${ampm}.`;

alert(returnString);