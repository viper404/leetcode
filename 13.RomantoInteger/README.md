## 13.RomantoInteger
## solution by [jaqenhgar](https://discuss.leetcode.com/topic/27024/java-solution-clean-and-simple-7-ms)
```javascript
var romanToInt = function(s) {
  var map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);
  var sum = map.get(s[0]);
  for (var i = 1; i < s.length; i++) {
    if (map.get(s[i]) > map.get(s[i-1])) {
      sum = sum-2*map.get(s[i-1]);
    }
    sum = sum+map.get(s[i]);
  }
  return sum;
}
```
## solution by viper404
```javascript
var romanToInt = function(s) {
  var arr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var str = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  s = s.split("");
  var num = 0;
  for (i = str.length-1; i >= 0; i--) {
    if (str[i].length === 2) {
      if (s[0]+s[1] === str[i]) {
        num = num+arr[i];
        s.splice(0,2);
      }
    }
    else {
      while (s[0] === str[i]) {
        num = num+arr[i];
        s.splice(0,1);
      }
    }
  }
  return num;
}
```
