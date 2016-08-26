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
// /**
//  * @param {number} n
//  * @return {string[]}
//  */
var generateParenthesis = function(n) {
  var arr = [];
  backtrack(arr, "", 0, 0, n);
  return arr;
}
function backtrack(arr, str, open, close, n) {
  if ((open === n) && (close === n)) {
    arr.push(str);
    return;
  }
  if (open < n) {
    backtrack(arr, str+"(", open+1, close, n);
  }
  if (close < open) {
    backtrack(arr, str+")", open, close+1, n);
  }
}
var n = 3;
console.log(generateParenthesis(n));
