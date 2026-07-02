
function orderReceived(callback) {
  document.getElementById("orderStatus").innerText = "Order Received";
  callback();
}

function preparingFood(callback) {
  document.getElementById("foodStatus").innerText = "Preparing Food";
  callback();
}

function delivered() {
  document.getElementById("deliveryStatus").innerText = "Delivered";
}

orderReceived(() => {
  preparingFood(() => {
    delivered();
  });
});