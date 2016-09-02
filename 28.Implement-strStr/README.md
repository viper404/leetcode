## 28.Implement-strStr
> ## solution by [jeantimex](https://discuss.leetcode.com/topic/18839/elegant-java-solution)

```javascript
var strStr = function(haystack, needle) {
  for (var i = 0; ; i++) {
    for (var j = 0; ; j++) {
      if (j === needle.length) {
        return i;
      }
      if (i+j === haystack.length) {
        return -1;
      }
      if (needle[j] !== haystack[i+j]) {
        break;
      }
    }
  }
}
```
> ## solution by viper404

```javascript
var strStr = function(haystack, needle) {
  if (needle === "") {
    return 0;
  }
  for (var i = 0; i < haystack.length-needle.length+1; i++) {
    if ((haystack[i] === needle[0]) && (haystack[i+needle.length-1] === needle[needle.length-1])) {
      var j = i;
      while (j < i+needle.length-1) {
        if (haystack[j] !== needle[j-i]) {
          break;
        }
        j++;
      }
      if (j === i+needle.length-1) {
        return i;
      }
    }
  }
  return -1;
}
```
