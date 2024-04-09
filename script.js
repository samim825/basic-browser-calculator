function deleteMe() {
  document.getElementById("result").value = "";
}
function calculator(newValue) {
  document.getElementById("result").value += newValue;
}
function answer() {
  let a = document.getElementById("result").value;
  let b = eval(a);
  document.getElementById("result").value = b;
}
function deleteEachElement() {
  let element = document.getElementById("result").value;
  let newEndIndex = element.length - 1;
  let newElement = element.slice(0, newEndIndex);
  document.getElementById("result").value = newElement;
}
