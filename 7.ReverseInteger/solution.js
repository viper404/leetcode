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
var x = 0;
console.log(reverse(x));
