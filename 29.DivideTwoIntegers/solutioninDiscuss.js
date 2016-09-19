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
var dividend = 0;
var divisor = 1;
console.log(divide(dividend, divisor));
