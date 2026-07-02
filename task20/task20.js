
const welcomeMessage = () => {
  console.log("Welcome to Employee Salary Management System");
};

const department = function() {
  console.log("Department: IT");
};

function loginSystem(callback) {
  console.log("Login Successful");
  callback();
}

function loadDashboard() {
  console.log("Employee Dashboard Loaded");
}

function displayEmployeeDetails() {
  console.log("Employee Name: Naveen");
  console.log("Base Salary: 30000");
  console.log("Bonus: 5000");
  console.log("Allowance: 2000");
}

function calculateSalary(base, bonus, allowance) {
  return base + bonus + allowance;
}

function* bonusCoupons() {
  yield "10% Discount Coupon";
  yield "20% Discount Coupon";
  yield "30% Discount Coupon";
  yield "Better Luck Next Time";
}

function tax(base) {
  return function(percent) {
    return base - (base * percent / 100);
  };
}

welcomeMessage();
department();

loginSystem(loadDashboard);

displayEmployeeDetails();

const finalSalary = calculateSalary(30000, 5000, 2000);
console.log("Final Salary (before tax): " + finalSalary);

const coupons = bonusCoupons();
console.log("Monthly Bonus Coupons:");
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);

const salaryAfterTax = tax(finalSalary)(10);
console.log("Final Salary (after tax): " + salaryAfterTax);
console.log("----- Employee Report -----");
console.log("Name: Naveen");
console.log("Department: IT");
console.log("Salary after Tax: " + salaryAfterTax);
console.log("Report Generated Successfully!");