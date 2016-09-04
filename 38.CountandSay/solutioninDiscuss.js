// 38. Count and Say
// The count-and-say sequence is the sequence of integers beginning as follows:
// 1, 11, 21, 1211, 111221, ...
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Given an integer n, generate the nth sequence.
// Note: The sequence of integers will be represented as a string.
// /**
//  * @param {number} n
//  * @return {string}
//  */
var countAndSay = function(n) {
  var curr = "1";
  for (var i = 0; i < n-1; i++) {
    var prev = curr;
    var say = prev[0];
    var count = 1;
    curr = "";
    for (var j = 1; j < prev.length; j++) {
      if (say !== prev[j]) {
        curr = curr+parseInt(count)+say;
        say = prev[j];
        count = 1;
      }
      else {
        count++;
      }
    }
    curr = curr+parseInt(count)+say;
  }
  return curr;
}
var n = 1;
console.log(countAndSay(n));
