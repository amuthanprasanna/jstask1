
function checkResult(marks) {
  if (marks >= 35) {
    document.getElementById("studentResult").innerText = "Pass";
  } else {
    document.getElementById("studentResult").innerText = "Fail";
  }
}
checkResult(45);