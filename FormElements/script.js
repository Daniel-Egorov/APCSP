// function doSomething(){
//   alert(document.getElementsByName("sameName")[0].checked)
//   alert(document.getElementById("radio1").value)
// }

function getPrice(cone, flavors) {
  let conePrice;
  switch (cone) {
    case "cakeCone":
      conePrice = 1.5;
      break;
    case "waffleCone":
      conePrice = 2.5;
      break;
    case "sugarCone":
      conePrice = 2.0;
      break;
    case "waffleBowl":
      conePrice = 3.5;
      break;
  }
  let perFlavorCost = 0.75;
  let flavorsPrice = perFlavorCost * flavors.length;
  return flavorsPrice + conePrice;
}

function onOrder() {
  let resultText = document.getElementById("resultText");
  let coneTypes = document.getElementsByName("coneType");
  let flavorTypes = document.getElementsByName("flavorType");
  let cone;
  let flavors = [];
  for (let i = 0; i < coneTypes.length; i++) {
    if (document.getElementById(coneTypes[i].id).checked) {
      cone = coneTypes[i].id;
      break;
    }
  }
  for (let i = 0; i < flavorTypes.length; i++) {
    if (document.getElementById(flavorTypes[i].id).checked) {
      flavors.push(flavorTypes[i].id);
    }
  }
  if (!cone) {
    resultText.innerHTML = "You haven't selected a cone!";
    return;
  }
  if (!flavors) {
    resultText.innerHTML = "You haven't selected any flavors!";
    return;
  }
  resultText.innerHTML = `Your ice cream order will be $${getPrice(
    cone,
    flavors
  )}`;
}
