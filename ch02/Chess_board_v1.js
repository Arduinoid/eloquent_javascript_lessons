for (var i=0; i<8; i++) {
  var shift = i % 2;
  var row = "";
  for (var j=0; j<8; j++) {
    var char = j % 2 - shift == 0 ? "#":" ";
    row += char;
  };
  console.log(row);
};
