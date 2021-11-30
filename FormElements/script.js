// function doSomething(){
//   alert(document.getElementsByName("sameName")[0].checked)
//   alert(document.getElementById("radio1").value)
// }
let price = 0;
let selCone = null;
let selFlavors = [];
let textToUser = ", welcome!";
let resultText = document.getElementById("resultText");
let nameField = document.getElementById("nameField");
let userName = "Guest";
let colorInput = document.getElementById("colorInput");

colorInput.addEventListener("input", (event) => {
  document.body.style = `background-color: ${event.path[0].value}`;
});

nameField.addEventListener("input", (event) => {
  userName = event.path[0].value;
  userName =
    userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase();
  resultText.innerHTML = `${userName}${textToUser}`;
});

let coneTypes = document.getElementsByName("coneType");
let flavorTypes = document.getElementsByName("flavorType");
for (let i = 0; i < coneTypes.length; i++) {
  coneTypes[i].addEventListener("click", (event) => {
    let coneID = event.path[0].id;
    if (!selCone) {
      price += getConePrice(coneID);
      selCone = coneID;
    } else if (selCone !== coneID) {
      price -= getConePrice(selCone);
      price += getConePrice(coneID);
      selCone = coneID;
    }
    if (selFlavors.length === 0) {
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

for (let i = 0; i < flavorTypes.length; i++) {
  flavorTypes[i].addEventListener("click", (event) => {
    let flavorID = event.path[0].id;
    let flavor = document.getElementById(flavorID);
    if (flavor.checked) {
      price += 0.75;
      selFlavors.push(flavorID);
    } else if (!flavor.checked) {
      price -= 0.75;
      selFlavors.splice(selFlavors.indexOf(flavorID), 1);
    }
    if (!selCone) {
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

// function getPrice(cone, flavors) {
//   let conePrice;
//   switch (cone) {
//     case "cakeCone":
//       conePrice = 1.5;
//       break;
//     case "waffleCone":
//       conePrice = 2.5;
//       break;
//     case "sugarCone":
//       conePrice = 2.0;
//       break;
//     case "waffleBowl":
//       conePrice = 3.5;
//       break;
//   }
//   let perFlavorCost = 0.75;
//   let flavorsPrice = perFlavorCost * flavors.length;
//   return (flavorsPrice + conePrice).toFixed(2);
// }

// function onOrder() {
//   let resultText = document.getElementById("resultText");
//   let coneTypes = document.getElementsByName("coneType");
//   let flavorTypes = document.getElementsByName("flavorType");
//   let cone;
//   let flavors = [];
//   for (let i = 0; i < coneTypes.length; i++) {
//     if (document.getElementById(coneTypes[i].id).checked) {
//       cone = coneTypes[i].id;
//       break;
//     }
//   }
//   for (let i = 0; i < flavorTypes.length; i++)
//     if (document.getElementById(flavorTypes[i].id).checked)
//       flavors.push(flavorTypes[i].id);

//   if (!cone) {
//     resultText.innerHTML = "You haven't selected a cone!";
//     return;
//   }
//   if (!flavors) {
//     resultText.innerHTML = "You haven't selected any flavors!";
//     return;
//   }
//   resultText.innerHTML = `Your ice cream order will be $${getPrice(
//     cone,
//     flavors
//   )}`;
// }
