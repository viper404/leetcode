// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return "";
  }
  var str = strs[0];
  for (var i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(str) !== 0) {
      str = str.substring(0, str.length-1);
    }
  }
  return str;
}
var strs = [];
console.log(longestCommonPrefix(strs));
