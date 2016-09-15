// 12. Integer to Roman
// Given an integer, convert it to a roman numeral.
// Input is guaranteed to be within the range from 1 to 3999.
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var arr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var str = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  var s = "";
  for (i = arr.length-1; i >= 0; i--) {
    if (num >= arr[i]) {
      var k = Math.floor(num/arr[i]);
      for (var j = 0; j < k; j++) {
        s = s+str[i];
      }
      num = num-k*arr[i];
    }
  }
  return s;
}
var num = 1;
console.log(intToRoman(num));
