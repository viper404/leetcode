// 7. Reverse Integer
// Reverse digits of an integer.
// Example1: x = 123, return 321
// Example2: x = -123, return -321
// Have you thought about this?
// Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!
// If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
// Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
/**
 * @param {number} x
 * @return {number}
 */
// Update (2014-11-10):
// Test cases had been added to test the overflow behavior.
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
var x = 0;
console.log(reverse(x));
