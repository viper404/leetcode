## 22.GenerateParentheses
> ## solution by [left.peter](https://discuss.leetcode.com/topic/3474/an-iterative-method)

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var arrs = [];
  arrs.push([""]);
  for (var i = 1; i < n+1; i++) {
    var temp = [];
    for (var j = 0; j < i; j++) {
      if (j !== i-1) {
        var first = arrs[j];
        var second = arrs[i-1-j];
        for (var p in first) {
          for (var q in second) {
            temp.push("("+first[p]+")"+second[q]);
          }
        }
      }
      else {
        var last = arrs[j];
        for (var r in last) {
          temp.push("("+last[r]+")");
        }
      }
    }
    arrs.push(temp);
  }
  return arrs[arrs.length-1].sort();
}
```
> ## solution by viper404

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var arr = [];
  backtrack(arr, "", 0, 0, n);
  return arr;
}
function backtrack(arr, str, open, close, n) {
  if ((open === n) && (close === n)) {
    arr.push(str);
    return;
  }
  if (open < n) {
    backtrack(arr, str+"(", open+1, close, n);
  }
  if (close < open) {
    backtrack(arr, str+")", open, close+1, n);
  }
}
```
