
function discount(price) {
  return function(percent) {
    const final = price - (price * percent / 100);
    document.getElementById("finalPrice").innerText = "Final Price : " + final;
  };
}

discount(1000)(10);