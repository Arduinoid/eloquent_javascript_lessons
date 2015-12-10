function myXOR(bool1, bool2) {
//   var both_not_true = !bool1 && !bool2;
  return bool1 ? !bool2 : bool2;
}

console.log(myXOR(true, true));
// false
console.log(myXOR(true, false));
// true
console.log(myXOR(false, false));
// false
console.log(myXOR(false, true));
// true
