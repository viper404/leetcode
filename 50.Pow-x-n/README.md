## 50.Pow-x-n
> ## solution by [dietpepsi](https://discuss.leetcode.com/topic/26380/iterative-java-python-short-solution-o-log-n)

```javascript
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
```
> ## solution by viper404

```javascript
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
```
