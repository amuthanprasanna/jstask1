
function enterUsername() {
  document.getElementById("loginFlow").innerText = "Enter Username";
  verifyPassword();
}
function verifyPassword() {
  document.getElementById("loginFlow").innerText += "\nVerify Password";
  loginSuccessful();
}
function loginSuccessful() {
  document.getElementById("loginFlow").innerText += "\nLogin Successful";
  loadDashboard();
}
function loadDashboard() {
  document.getElementById("loginFlow").innerText += "\nLoad Dashboard";
}
enterUsername();