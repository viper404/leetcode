// 38. Count and Say
// The count-and-say sequence is the sequence of integers beginning as follows:
// 1, 11, 21, 1211, 111221, ...
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Given an integer n, generate the nth sequence.
// Note: The sequence of integers will be represented as a string.
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) {
    return "1";
  }
  var arr = ["1"];
  while (arr.length !== n) {
    var str = arr[arr.length-1];
    var newStr = "";
    var j = 0;
    for (var i = 1; i < str.length; i++) {
      if (str[i] !== str[j]) {
        newStr = newStr+(i-j).toString()+str[j];
        j = i;
      }
    }
    newStr = newStr+(i-j).toString()+str[j];
    arr.push(newStr);
  }
  return arr[arr.length-1];
}
var n = 1;
console.log(countAndSay(n));
