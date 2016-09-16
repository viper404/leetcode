// 13. Roman to Integer
// Given a roman numeral, convert it to an integer.
// Input is guaranteed to be within the range from 1 to 3999.
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var arr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var str = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  s = s.split("");
  var num = 0;
  for (i = str.length-1; i >= 0; i--) {
    if (str[i].length === 2) {
      if (s[0]+s[1] === str[i]) {
        num = num+arr[i];
        s.splice(0,2);
      }
    }
    else {
      while (s[0] === str[i]) {
        num = num+arr[i];
        s.splice(0,1);
      }
    }
  }
  return num;
}
var s = "DCXXI";
console.log(romanToInt(s));
