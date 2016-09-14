// 3. Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.
// Examples:
// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var temp = "";
  var str = "";
  for (var i = 0; i < s.length; i++) {
    if (temp.indexOf(s[i]) === -1) {
      temp = temp+s[i];
    }
    else {
      if (temp.length >= str.length) {
        str = temp;
      }
      temp = temp.slice(temp.indexOf(s[i])+1)+s[i];
    }
  }
  if (temp.length >= str.length) {
    str = temp;
  }
  return str.length;
}
var s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
