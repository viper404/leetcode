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
  var j = 0;
  var max = 0;
  var map = new Map();
  for (var i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      j = Math.max(j, map.get(s[i])+1);
    }
    map.set(s[i], i);
    max = Math.max(max, i-j+1);
  }
  return max;
}
var s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
