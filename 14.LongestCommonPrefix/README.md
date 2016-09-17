## 14.LongestCommonPrefix
> ## solution by [StefanPochmann](https://discuss.leetcode.com/topic/6987/java-code-with-13-lines)

```javascript
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
```
> ## solution by viper404

```javascript
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
```
