// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length !== 0) {
    strs.sort();
    var str1 = strs[0];
    var str2 = strs[strs.length-1];
    var i = 0;
    var pre = "";
    while (i !== str1.length) {
      if (str1[i] !== str2[i]) {
        break;
      }
      pre = pre+str1[i];
      i++;
    }
    return pre;
  }
  return "";
}
var strs = [];
console.log(longestCommonPrefix(strs));
