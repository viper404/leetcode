## 29.DivideTwoIntegers
> ## solution by [jianchao.li.fighter](https://discuss.leetcode.com/topic/15568/detailed-explained-8ms-c-solution)

```javascript
var divide = function(dividend, divisor) {
  if (divisor === 0) {
    return 0;
  }
  var sign = (((dividend > 0) && (divisor < 0)) || ((dividend < 0) && (divisor > 0))) ? -1 : 1;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  var result = 0;
  while (dividend >= divisor) {
    var temp = divisor;
    var multiple = 1;
    while (dividend >= (temp+temp)) {
      temp = temp+temp;
      multiple = multiple+multiple;
    }
    dividend = dividend-temp;
    result = result+multiple;
  }
  result = (sign === 1) ? result : -result;
  result = (result >= 2147483647) ? 2147483647 : result;
  result = (result <= -2147483648) ? -2147483648 : result;
  return result;
}
```
> ## solution by viper404

```javascript
var divide = function(dividend, divisor) {
  if (divisor === 0) {
    return 0;
  }
  var flag = (((dividend > 0) && (divisor > 0)) || ((dividend < 0) && (divisor < 0))) ? false : true;
  dividend = Math.abs(dividend);
  divisor= Math.abs(divisor);
  var str1 = dividend.toString();
  var str2 = divisor.toString();
  var temp = [];
  if (str1.length === str2.length) {
    temp = minus(dividend, divisor);
    if (flag) {
      return (-temp[0] < -2147483648) ? -2147483648 : -temp[0];
    }
    return (temp[0] > 2147483647) ? 2147483647 : temp[0];
  }
  else {
    if (dividend < divisor) {
      return 0;
    }
    else {
      var n = 0;
      var arr = [str2];
      var times = ["1"];
      for (var i = 0; i < str1.length-str2.length; i++) {
        arr.push(arr[arr.length-1]+"0");
        times.push(times[times.length-1]+"0");
      }
      for (var j = arr.length-1; j > -1; j--) {
        temp = minus(dividend, parseInt(arr[j]));
        for (var k = 0; k < temp[0]; k++) {
          n = n+parseInt(times[j]);
        }
        dividend = temp[1];
      }
      if (flag) {
        return (-n < -2147483648) ? -2147483648 : -n;
      }
      return (n > 2147483647) ? 2147483647 : n;
    }
  }
}
function minus(num1, num2) {
  var count = 0;
  if (num1 < num2) {
    return [count, num1];
  }
  else {
    while (num1 >= 0) {
      num1 = num1-num2;
      count++;
    }
    return [count-1, num1+num2];
  }
}
```
