
function* fruitGenerator() {
  yield "Apple";
  yield "Orange";
  yield "Banana";
}

const fruits = fruitGenerator();
function showNextFruit() {
  const result = fruits.next();
  if (!result.done) {
    document.getElementById("fruitOutput").innerText = result.value;
  } else {
    document.getElementById("fruitOutput").innerText = "No more fruits!";
  }
}