
function salary(base) {
  return function(bonus) {
    return function(allowance) {
      const total = base + bonus + allowance;
      document.getElementById("totalSalary").innerText = total;
    };
  };
}
salary(30000)(5000)(2000);