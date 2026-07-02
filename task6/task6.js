
function getProductPrice() {
  return 25000;
}
const price = getProductPrice();

const gst = price * 0.18;
const totalPrice = price + gst;

document.getElementById("priceWithGST").innerText = 
  "Price + GST : " + totalPrice;