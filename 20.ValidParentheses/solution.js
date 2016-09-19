// 20. Valid Parentheses
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var patt = /(\(\)|\{\}|\[\])*/g;
  if (s.length%2 === 1) {
    return false;
  }
  for (var i = 0; i < s.length*3; i++) {
    s = s.replace(patt, "");
  }
  if (s === "") {
    return true;
  }
  else {
    return false;
  }
}
var s = "[";
console.log(isValid(s));
