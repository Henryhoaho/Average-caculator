// Average caculator

// Event listener
document.getElementById("calc-btn").addEventListener("click", calcAverage);
// event fuction
function calcAverage() {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;
  // process
  let average = (num1 + num2 + num3) / 3;
  let sum = num1 + num2 + num3;
  let product = num1 * num2 * num3;
  let remainder = num1 % num2;
  let power = num1 ** num2;
  let rounded = num1.toFixed(2);
  let tan = Math.tan(num3);
  let ran = Math.random() * (num1 - num2 + 1) + num2;
  // Output
  document.getElementById("ave-out").innerHTML = average;
  document.getElementById("sum-out").innerHTML = sum;
  document.getElementById("product-out").innerHTML = product;
  document.getElementById("divide-out").innerHTML = remainder;
  document.getElementById("power-out").innerHTML = power;
  document.getElementById("decimal-out").innerHTML = rounded;
  document.getElementById("tangent-out").innerHTML = tan;
  document.getElementById("random-out").innerHTML = ran;
}
