function add() {
  var total = 0;
  for (var i=0; i< arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(add(1,2,3));
