let price = 0; // global price variable
let selCone = null; // currently selected cone
let selFlavors = []; // currently selected flavors
let textToUser = ", welcome!"; // to store what is said to the user, allows for live update of username
let resultText = document.getElementById("resultText"); // to display to the user their price for ice cream
let nameField = document.getElementById("nameField"); // user input for their name
let userName = "Guest"; // global username variable, default user's name to Guest, if they don't input anything
let colorInput = document.getElementById("colorInput"); // user input used to change background color of body

// add event listener to update the body's background as user chooses color.
colorInput.addEventListener("input", (event) => {
  document.body.style = `background-color: ${event.path[0].value}`;
});

// add event listener to update the global username variable as the user types
nameField.addEventListener("input", (event) => {
  userName = event.path[0].value;
  userName =
    userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase();
  resultText.innerHTML = `${userName}${textToUser}`;
});

let coneTypes = document.getElementsByName("coneType");
let flavorTypes = document.getElementsByName("flavorType");
// add listener for each cone type radio button
for (let i = 0; i < coneTypes.length; i++) {
  coneTypes[i].addEventListener("click", (event) => {
    let coneID = event.path[0].id;
    if (!selCone) {
      // if no cone is already selected
      price += getConePrice(coneID);
      selCone = coneID;
    } else if (selCone !== coneID) {
      // if the clicked cone isnt already selected
      price -= getConePrice(selCone);
      price += getConePrice(coneID);
      selCone = coneID;
    }
    if (selFlavors.length === 0) {
      // if no flavors have been selected
      textToUser = ", you must select a flavor!";
      resultText.innerHTML = `${userName}, you must select a flavor!`;
      return;
    }
    textToUser = `, your ice cream order will be $${price.toFixed(2)}`;
    resultText.innerHTML = `${userName}, your ice cream order will be $${price.toFixed(
      2
    )}`;
  });
}

// add listener event to all flavor check boxes
for (let i = 0; i < flavorTypes.length; i++) {
  flavorTypes[i].addEventListener("click", (event) => {
    let flavorID = event.path[0].id;
    let flavor = document.getElementById(flavorID);
    if (flavor.checked) {
      price += 0.75; // increase the price when new one is added
      selFlavors.push(flavorID); // then add the flavor to the array
    } else if (!flavor.checked) {
      price -= 0.75; // decrease price when one is removed
      // then remove the flavor from the array
      selFlavors.splice(selFlavors.indexOf(flavorID), 1);
    }
    if (!selCone) {
      // if no cone has been selected
      textToUser = ", you must select a cone!";
      resultText.innerHTML = `${userName}, you must select a cone!`;
    } else {
      textToUser = `, your ice cream order will be $${price.toFixed(2)}`;
      resultText.innerHTML = `${userName}, your ice cream order will be $${price.toFixed(
        2
      )}`;
    }
  });
}

function getConePrice(coneID) {
  switch (coneID) {
    case "cakeCone":
      return 1.5;
    case "waffleCone":
      return 2.5;
    case "sugarCone":
      return 2.0;
    case "waffleBowl":
      return 3.5;
  }
}
