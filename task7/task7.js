
function demo() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }

  document.getElementById("scopeOutput").innerText = a;
}
demo();