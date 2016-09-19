// 22. Generate Parentheses
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// For example, given n = 3, a solution set is:
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var arrs = [];
  arrs.push([""]);
  for (var i = 1; i < n+1; i++) {
    var temp = [];
    for (var j = 0; j < i; j++) {
      if (j !== i-1) {
        var first = arrs[j];
        var second = arrs[i-1-j];
        for (var p in first) {
          for (var q in second) {
            temp.push("("+first[p]+")"+second[q]);
          }
        }
      }
      else {
        var last = arrs[j];
        for (var r in last) {
          temp.push("("+last[r]+")");
        }
      }
    }
    arrs.push(temp);
  }
  return arrs[arrs.length-1].sort();
}
var n = 3;
console.log(generateParenthesis(n));
