## 9.PalindromeNumber
## solution by [cbmbbz](https://discuss.leetcode.com/topic/8090/9-line-accepted-java-code-without-the-need-of-handling-overflow)
```javascript
var isPalindrome = function(x) {
  if ((x < 0) || ((x !== 0) && (x%10 === 0))) {
    return false;
  }
  var rest = 0;
  while (x > rest) {
    rest = rest*10+x%10;
    x = Math.floor(x/10);
  }
  return ((x === rest) || (x === Math.floor(rest/10)));
}
```
## solution by viper404
```javascript
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  else if (x > 2147483647) {
    return false;
  }
  else {
    x = x.toString();
    x = x.split("");
    if (x.length === 1) {
      return true;
    }
    else {
      while (x.length > 1) {
        if (x[0] === x[x.length-1]) {
          x.pop();
          x.shift();
        }
        else {
          return false;
        }
      }
      return true;
    }
  }
}
```
