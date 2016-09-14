## 6.ZigZagConversion
> ## solution by [dylan_yu](https://discuss.leetcode.com/topic/3162/easy-to-understand-java-solution)

```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  var arr = new Array(numRows);
  for (var i = 0; i < numRows; i++) {
    arr[i] = "";
  }
  var j = 0;
  while (j < s.length) {
    for (i = 0; i < numRows && j < s.length; i++) {
      arr[i] = arr[i]+s[j];
      j++;
    }
    for (i = numRows-2; i > 0 && j < s.length; i--) {
      arr[i] = arr[i]+s[j];
      j++;
    }
  }
  return arr.join("");
}
```
> ## solution by viper404

```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  var arr = [];
  var str = "";
  var left = 0;
  var right = 0;
  var index = 0;
  if (numRows === 1) {
    return s;
  }
  else {
    for (var i = 1; i < numRows+1; i++) {
      str = "";
      left = (numRows-i)*2;
      right = (numRows-1)*2-left;
      index = i-1;
      if (right === 0) {
        while (index <= s.length-1) {
          str = str+s[index];
          index = index+left;
        }
      }
      else if (left === 0) {
        while (index <= s.length-1) {
          str = str+s[index];
          index = index+right;
        }
      }
      else {
        var j = 0;
        while (index <= s.length-1) {
          if (j%2 === 1) {
            str = str+s[index];
            index = index+right;
            j++;
          }
          else {
            str = str+s[index];
            index = index+left;
            j++;
          }
        }
      }
      arr[i-1] = str;
    }
    return arr.join("");
  }
}
```
