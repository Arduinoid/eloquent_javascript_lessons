function reverseArray(array) {
  var new_array = [];
  for (var item in array) {
    new_array.unshift(array[item]);
  }
  return new_array;
}
// This one uses a copy of the array
function reverseArraySideEffect(array) {
  var reversed_array = reverseArray(array);
  for (var item in array) {
    array[item] = reversed_array[item];
  }
  return array;
}
/*
This funciton only operates on each item
without making a copy of the entire array
*/
function reverseArrayInPlace(array) {
  var hold_item;
  var last_index = array.length - 1;
  var half_of_length = Math.floor(array.length / 2);
  for (var i = 0; i < half_of_length; i++) {
    hold_item = array[i];
    array[i] = array[last_index - i];
    array[last_index - i] = hold_item;
  }
  return array;
}
