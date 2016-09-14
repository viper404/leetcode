// 50. Pow(x, n)
// Implement pow(x, n).
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n > 0) {
    return (n%2 === 0) ? myPow(x*x, n/2) : x*myPow(x, n-1);
  }
  else {
    return 1/myPow(x, -n);
  }
}
var x = 8.88023;
var n = 3;
console.log(myPow(x, n));
