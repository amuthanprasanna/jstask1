
function calculateBonus(salary, bonus) {
  const total = salary + bonus;
  document.getElementById("totalSalary").innerText = "Total Salary : " + total;
}
calculateBonus(40000, 5000);