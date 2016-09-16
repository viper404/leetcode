// 13. Roman to Integer
// Given a roman numeral, convert it to an integer.
// Input is guaranteed to be within the range from 1 to 3999.
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);
  var sum = map.get(s[0]);
  for (var i = 1; i < s.length; i++) {
    if (map.get(s[i]) > map.get(s[i-1])) {
      sum = sum-2*map.get(s[i-1]);
    }
    sum = sum+map.get(s[i]);
  }
  return sum;
}
var s = "DCXXI";
console.log(romanToInt(s));
