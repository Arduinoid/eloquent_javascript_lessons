function myRange(num1, num2) {
  var array = [];
  for (var i=num1; i<num2 + 1; i++) {
    array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i=0; i<array.length;i++) {
    total += array[i];
  }
  return total;
}
