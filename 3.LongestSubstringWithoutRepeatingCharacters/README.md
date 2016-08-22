## 3.LongestSubstringWithoutRepeatingCharacters
## solution by [cbmbbz](https://discuss.leetcode.com/topic/8232/11-line-simple-java-solution-o-n-with-explanation)
```javascript
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
```
## solution by viper404
```javascript
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
```
