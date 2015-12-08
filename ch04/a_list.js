// Had to look at the hint to get this...
function arrayToList(array) {
  var list = null;
  var last_index = array.length - 1;
  for (var item in array) {
    list = {'value': array[last_index - item], 'rest': list};
  }
  return list;
}

function listToArray(list) {
  // convert the list object back to array
  var array = [];
  for (var step = list; step; step = step.rest) {
    array.push(step.value);
  }
  return array;
}

function prepend(value, list) {
  // add value to front of given list
  list = {'value': value, 'rest': list}
  return list;
}

function nth(list, index) {
  // return the element at the given position
  var count = 0;
  for (var node = list; node; node = node.rest) {
    if (count == index) {
      return node.value;
    } else {
      count++;
    }
  }
}

/* make this

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

*/
