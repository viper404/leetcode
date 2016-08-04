// 7. Reverse Integer
// Reverse digits of an integer.
// Example1: x = 123, return 321
// Example2: x = -123, return -321
// /**
//  * @param {number} x
//  * @return {number}
//  */
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
