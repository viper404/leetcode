## 43.MultiplyStrings
> ## solution by [lx223](https://discuss.leetcode.com/topic/13026/ac-solution-in-java-with-explanation)

```javascript
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if ((num1 === "0") || (num2 === "0")) {
    return "0";
  }
  var str = "0123456789";
  var arr = [];
  for (var n = 0; n < num1.length+num2.length; n++) {
    arr[n] = 0;
  }
  for (var i = num1.length-1; i >= 0; i--) {
    for (var j = num2.length-1; j >= 0; j--) {
      var mul = str.indexOf(num1[i])*str.indexOf(num2[j]);
      var sum = mul+arr[i+j+1];
      arr[i+j] = arr[i+j]+Math.floor(sum/10);
      arr[i+j+1] = sum%10;
    }
  }
  if (arr[0] === 0) {
    arr.shift();
  }
  return arr.join("");
}
```
> ## solution by viper404

```javascript
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if ((num1 === "0") || (num2 === "0")) {
    return "0";
  }
  var str = "0123456789";
  var arr = [];
  for (var n = 0; n < num1.length+num2.length; n++) {
    arr[n] = 0;
  }
  for (var i = num1.length-1; i >= 0; i--) {
    for (var j = num2.length-1; j >= 0; j--) {
      arr[i+j+1] = arr[i+j+1]+str.indexOf(num1[i])*str.indexOf(num2[j]);
    }
  }
  var carry = 0;
  for (var k = arr.length-1; k >= 0; k--) {
    var temp = (arr[k]+carry)%10;
    carry = Math.floor((arr[k]+carry)/10);
    arr[k] = temp;
  }
  if (arr[0] === 0) {
    arr.shift();
  }
  return arr.join("");
}
```
