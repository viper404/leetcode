## 5.LongestPalindromicSubstring
## solution by [liji94188](https://discuss.leetcode.com/topic/21848/ac-relatively-short-and-very-clear-java-solution)
```javascript
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
```
## solution by viper404
```javascript
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
```
