function isObject(val) {
    if (typeof val === 'object' && val !== null) return true;
  }

function getFirstProp(obj) {
  for (var item in obj) {
    return item;
  }
}

function deepEqual(val_one, val_two) {
  // setting up variables for value comparisons
  var obj1 = isObject(val_one);
  var obj2 = isObject(val_two);
  var both_not_obj = !obj1 && !obj2;
  var both_obj = obj1 && obj2;
  var only_one_obj = !obj1 && obj2 ||  obj1 && !obj2;
  // checking if both or only one value is an object, then comparing
  if (both_not_obj || only_one_obj) return val_one === val_two;
  // further checking if both ar objects
  if (both_obj) {
    // variables used in for loops
    var count_1 = 0;
    var count_2 = 0;
    var item;

    for (item in val_one) {
      count_1++;
    }
    for (item in val_two) {
      count_2++;
    }
    // checking if both objects have same amount of properties
    if (count_1 != count_2) return false;
    else {
      // if so run funciton again at on first property of object
      return deepEqual(val_one[getFirstProp(val_one)], val_two[getFirstProp(val_two)]);
    }
  }
}
