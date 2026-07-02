
function* couponGenerator() {
  yield "10% Discount";
  yield "20% Discount";
  yield "30% Discount";
  yield "Better Luck Next Time";
}

const coupons = couponGenerator();

function showNextCoupon() {
  const result = coupons.next();
  if (!result.done) {
    document.getElementById("couponOutput").innerText = result.value;
  } else {
    document.getElementById("couponOutput").innerText = "No more coupons!";
  }
}