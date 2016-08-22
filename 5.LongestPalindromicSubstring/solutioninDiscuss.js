// 5. Longest Palindromic Substring
// Given a string S, find the longest palindromic substring in S.
// You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.
// /**
//  * @param {string} s
//  * @return {string}
//  */
var longestPalindrome = function(s) {
  var str = "";
  var length = 0;
  for (var i = 0; i < s.length; i++) {
    if (isPalindrome(s, i-length-1, i)) {
      str = s.slice(i-length-1, i+1);
      length = length+2;
    }
    else if (isPalindrome(s, i-length, i)) {
      str = s.slice(i-length, i+1);
      length = length+1;
    }
  }
  return str;
}
function isPalindrome(s, begin, end) {
  if (begin < 0) {
    return false;
  }
  while (begin < end) {
    if (s[begin] !== s[end]) {
      return false;
    }
    begin++;
    end--;
  }
  return true;
}
var s = "a";
console.log(longestPalindrome(s));
