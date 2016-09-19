## 20.ValidParentheses
> ## solution by [daniel52](https://discuss.leetcode.com/topic/9006/java-solution-with-stack-very-easy-to-read-straightforward)

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");
  var arr = [];
  if (s.length%2 === 1) {
    return false;
  }
  else {
    for (var i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
        arr.push(s[i]);
      }
      else {
        if (map.get(arr[arr.length-1]) === s[i]) {
          arr.pop();
        }
        else {
          return false;
        }
      }
    }
    return (arr.length === 0);
  }
}
```
> ## solution by viper404

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var patt = /(\(\)|\{\}|\[\])*/g;
  if (s.length%2 === 1) {
    return false;
  }
  for (var i = 0; i < s.length*3; i++) {
    s = s.replace(patt, "");
  }
  if (s === "") {
    return true;
  }
  else {
    return false;
  }
}
```
