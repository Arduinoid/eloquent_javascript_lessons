var width = 20;
var height = 8;
for (var i=0; i<height; i++) {
  var shift = i % 2;
  var row = "";
  for (var j=0; j<width; j++) {
    var char = j % 2 - shift == 0 ? "#":" ";
    row += char;
  };
  console.log(row);
};
