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
  var m = (n > 0) ? n : -n;
  var ans = 1;
  while (m !== 0) {
    if ((m&1) === 1) {
      ans = ans*x;
    }
    x = x*x;
    m = Math.floor(m/2);
  }
  return (n > 0) ? ans : 1/ans;
}
var x = 8.88023;
var n = 3;
console.log(myPow(x, n));
