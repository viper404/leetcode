## 38.CountandSay
> ## solution by [reeclapple](https://discuss.leetcode.com/topic/2309/show-an-answer-in-java)

```javascript
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var curr = "1";
  for (var i = 0; i < n-1; i++) {
    var prev = curr;
    var say = prev[0];
    var count = 1;
    curr = "";
    for (var j = 1; j < prev.length; j++) {
      if (say !== prev[j]) {
        curr = curr+count.toString()+say;
        say = prev[j];
        count = 1;
      }
      else {
        count++;
      }
    }
    curr = curr+count.toString()+say;
  }
  return curr;
}
```
> ## solution by viper404

```javascript
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) {
    return "1";
  }
  var arr = ["1"];
  while (arr.length !== n) {
    var str = arr[arr.length-1];
    var newStr = "";
    var j = 0;
    for (var i = 1; i < str.length; i++) {
      if (str[i] !== str[j]) {
        newStr = newStr+(i-j).toString()+str[j];
        j = i;
      }
    }
    newStr = newStr+(i-j).toString()+str[j];
    arr.push(newStr);
  }
  return arr[arr.length-1];
}
```
