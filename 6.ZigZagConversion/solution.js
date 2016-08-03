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
  var arr = [];
  var str = "";
  var left = 0;
  var right = 0;
  var index = 0;
  if (numRows === 1) {
    return s;
  }
  else {
    for (var i = 1; i < numRows+1; i++) {
      str = "";
      left = (numRows-i)*2;
      right = (numRows-1)*2-left;
      index = i-1;
      if (right === 0) {
        while (index <= s.length-1) {
          str = str+s[index];
          index = index+left;
        }
      }
      else if (left === 0) {
        while (index <= s.length-1) {
          str = str+s[index];
          index = index+right;
        }
      }
      else {
        var j = 0;
        while (index <= s.length-1) {
          if (j%2 === 1) {
            str = str+s[index];
            index = index+right;
            j++;
          }
          else {
            str = str+s[index];
            index = index+left;
            j++;
          }
        }
      }
      arr[i-1] = str;
    }
    return arr.join("");
  }
}
var s = "PAYPALISHIRING";
var numRows = 3;
console.log(convert(s, numRows));
