function add() {
  let firstNum = parseFloat(document.getElementById("num1").value);
  let secondNum = parseFloat(document.getElementById("num2").value);
  let result = secondNum + firstNum;
  document.getElementById("result").innerHTML = result;
}
function suptract() {
  let firstNum = parseFloat(document.getElementById("num1").value);
  let secondNum = parseFloat(document.getElementById("num2").value);
  let result = secondNum - firstNum;
  document.getElementById("result").innerHTML = result;
}
function multiply() {
  let firstNum = parseFloat(document.getElementById("num1").value);
  let secondNum = parseFloat(document.getElementById("num2").value);
  let result = secondNum * firstNum;
  document.getElementById("result").innerHTML = result;
}
function divded() {
  let firstNum = parseFloat(document.getElementById("num1").value);
  let secondNum = parseFloat(document.getElementById("num2").value);
  let result = secondNum / firstNum;
  document.getElementById("result").innerHTML = result;
}
function SquareRoot() {
  let firstNum = parseFloat(document.getElementById("num1").value);
  let result = Math.sqrt(firstNum);
  document.getElementById("result").innerHTML = result;
}
function Power() {
  let firstNum = parseFloat(document.getElementById("num1").value);
  let secondNum = parseFloat(document.getElementById("num2").value);
  let result = Math.pow(firstNum, secondNum);
  document.getElementById("result").innerHTML = result;
}
