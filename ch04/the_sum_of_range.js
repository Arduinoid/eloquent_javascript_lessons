function range(start_num, end_num, step) {
  step = !step ? 1 : step;
  step = step < 0 ? -step : step;
  var array = [];
  if (start_num > end_num) {
    for (var i = start_num; i >= end_num; i -= step) {
      array.push(i);
    }
    return array;
  } else {
    for (var i = start_num; i < end_num + 1; i += step) {
      array.push(i);
    }
    return array;
  }
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// var range_test = range(1, 5, 2);
