## 12.IntegertoRoman
> ## solution by [fabrizio3](https://discuss.leetcode.com/topic/12384/simple-solution)

```javascript
var intToRoman = function(num) {
  var M = ["", "M", "MM", "MMM"];
  var C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  return M[Math.floor(num/1000)]+C[Math.floor(num%1000/100)]+X[Math.floor(num%100/10)]+I[num%10];
}
```
> ## solution by viper404

```javascript
var intToRoman = function(num) {
  var arr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var str = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  var s = "";
  for (i = arr.length-1; i >= 0; i--) {
    if (num >= arr[i]) {
      var k = Math.floor(num/arr[i]);
      for (var j = 0; j < k; j++) {
        s = s+str[i];
      }
      num = num-k*arr[i];
    }
  }
  return s;
}
```
