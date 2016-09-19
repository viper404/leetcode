// 29. Divide Two Integers
// Divide two integers without using multiplication, division and mod operator.
// If it is overflow, return MAX_INT.
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
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
var dividend = 0;
var divisor = 1;
console.log(divide(dividend, divisor));
