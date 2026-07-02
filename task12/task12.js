
function getCompanyName() {
  return "Stackly";
}

const company = getCompanyName();

document.getElementById("welcomeMessage").innerText = "Welcome " + company;