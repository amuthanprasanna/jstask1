
function printEmployeeDetails(name, department, salary) {
  const details = `
    Employee Name : ${name} <br>
    Department : ${department} <br>
    Salary : ${salary}
  `;
  document.getElementById("employeeInfo").innerHTML = details;
}
printEmployeeDetails("Naveen", "Developer", 30000);