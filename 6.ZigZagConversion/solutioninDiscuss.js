// 6. ZigZag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
// (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string text, int nRows);
// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */
var convert = function(s, numRows) {
  var arr = new Array(numRows);
  for (var i = 0; i < numRows; i++) {
    arr[i] = "";
  }
  var j = 0;
  while (j < s.length) {
    for (i = 0; i < numRows && j < s.length; i++) {
      arr[i] = arr[i]+s[j];
      j++;
    }
    for (i = numRows-2; i > 0 && j < s.length; i--) {
      arr[i] = arr[i]+s[j];
      j++;
    }
  }
  return arr.join("");
}
var s = "PAYPALISHIRING";
var numRows = 3;
console.log(convert(s, numRows));
