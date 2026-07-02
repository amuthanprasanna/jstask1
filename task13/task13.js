
function dashboard() {
  document.getElementById("dashboardStatus").innerText = "Dashboard Loaded";
}

function login() {
  document.getElementById("loginStatus").innerText = "Login Successful";  
  dashboard();
}

login();