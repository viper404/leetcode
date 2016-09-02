## 7.ReverseInteger
> ## solution by [bitzhuwei](https://discuss.leetcode.com/topic/6104/my-accepted-15-lines-of-code-for-java)

```javascript
var reverse = function(x) {
  var y = 0;
  var z = 0;
  var tail = 0;
  var flag = false;
  if (x < 0) {
    x = Math.abs(x);
    flag = true;
  }
  while (x !== 0) {
    tail = x%10;
    z = y*10+tail;
    if ((z > 2147483647) || (z < -2147483648)) {
      return 0;
    }
    y = z;
    x = Math.floor(x/10);
  }
  if (flag) {
    return -y;
  }
  return y;
}
```
> ## solution by viper404

```javascript
var reverse = function(x) {
  var temp = "";
  var str = "";
  var num = 0;
  if (x >= 0) {
    temp = x.toString();
    temp = temp.split("");
    temp = temp.reverse();
    str = temp.join("");
    num = parseInt(str);
  }
  else {
    temp = x.toString();
    temp = temp.slice(1);
    temp = temp.split("");
    temp = temp.reverse();
    str = "-"+temp.join("");
    num = parseInt(str);
  }
  if ((num > 2147483647) || (num < -2147483648)) {
    return 0;
  }
  else {
    return num;
  }
}
```
