/*
This is a how to calculate corelation.
The result can be either -1, 0, or 1 which will represent the relationship
between two things.


          N     N  -  N    N
            11    00    10   01
PHI =    ________________________
             ____________________
            / N    N    N    N
          \/   1•   0•   •1   •0
*/
var myPhi = (1 * 76 - 4 * 9) / Math.sqrt((5 * 85 * 10 * 80));

// Book solution
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
};

var entries = [76, 9, 4, 1];

console.log(myPhi);
console.log(phi(entries));
