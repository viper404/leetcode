// 5. Longest Palindromic Substring
// Given a string S, find the longest palindromic substring in S.
// You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.
// /**
//  * @param {string} s
//  * @return {string}
//  */
var longestPalindrome = function(s) {
  var j = 1;
  var str = "";
  var temp = "";
  if (s.length === 1) {
    str = s;
  }
  else if (s.length === 2) {
    if (s[1] === s[0]) {
      str = s;
    }
  }
  else {
    for (var i = 0; i < s.length; i++) {
      if (s[i+1] === s[i]) {
        temp = s[i]+s[i+1];
        j = 1;
        while ((s[i-j] === s[i+j+1]) && ((i-j) !== -1) && ((i+j+1) !== s.length)) {
          temp = s[i-j]+temp+s[i+j+1];
          j++;
        }
        if (temp.length >= str.length) {
          str = temp;
        }
      }
      if (s[i+1] === s[i-1]) {
        temp = s[i-1]+s[i]+s[i+1];
        j = 1;
        while ((s[i-j-1] === s[i+j+1]) && ((i-j-1) !== -1) && ((i+j+1) !== s.length)) {
          temp = s[i-j-1]+temp+s[i+j+1];
          j++;
        }
        if (temp.length >= str.length) {
          str = temp;
        }
      }
    }
  }
  if (str === "") {
    str = s[s.length-1];
  }
  return str;
}
var s = "a";
console.log(longestPalindrome(s));
