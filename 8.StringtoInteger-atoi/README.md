## 8.StringtoInteger-atoi
> ## solution by [annieqt](https://discuss.leetcode.com/topic/2666/my-simple-solution)

```javascript
var myAtoi = function(str) {
  if (str.length === 0) {
    return 0;
  }
  var i = 0;
  var num = 0;
  var symbol = 1;
  while (str[i] === " ") {
    i++;
  }
  if ((str[i] === "+") || (str[i] === "-")) {
    symbol = (str[i] === "-") ? -1 : 1;
    i++;
  }
  while ((i < str.length) && (str[i] >= "0") && (str[i] <= "9")) {
    num = 10*num+(str[i]-"0");
    if ((num > 2147483647) || (num < -2147483648)) {
      return (symbol === 1) ? 2147483647 : -2147483648;
    }
    i++;
  }
  return symbol*num;
}
```
> ## solution by viper404

```javascript
var myAtoi = function(str) {
  var patt = /(\+)*(\-)*(\d)*/g;
  var temp = str.match(patt);
  if (temp === null) {
    return 0;
  }
  else {
    var num = temp[0];
    num = parseInt(str);
    if (isNaN(num)) {
      return 0;
    }
    else {
      if (num > 2147483647) {
        return 2147483647;
      }
      else if (num < -2147483648) {
        return -2147483648;
      }
      else {
        return num;
      }
    }
  }
}
```
