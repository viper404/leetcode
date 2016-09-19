// 20. Valid Parentheses
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");
  var arr = [];
  if (s.length%2 === 1) {
    return false;
  }
  else {
    for (var i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
        arr.push(s[i]);
      }
      else {
        if (map.get(arr[arr.length-1]) === s[i]) {
          arr.pop();
        }
        else {
          return false;
        }
      }
    }
    return (arr.length === 0);
  }
}
var s = "[";
console.log(isValid(s));
