## 17.LetterCombinationsofaPhoneNumber
> ## solution by [lirensun](https://discuss.leetcode.com/topic/8465/my-java-solution-with-fifo-queue)

```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) {
    return [];
  }
  var map = ["", "*", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  var arr = [""];
  for (var i = 0; i < digits.length; i++) {
    var num = parseInt(digits[i]);
    var next = map[num];
    var left = arr[0];
    while (left.length === i) {
      arr.shift();
      for (var j = 0; j < next.length; j++) {
        arr.push(left+next[j]);
      }
      left = arr[0];
    }
  }
  return arr;
}
```
> ## solution by viper404

```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  var arrs = [[], ["*"], ["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"],
  ["j", "k", "l"], ["m", "n", "o"], ["p", "q", "r", "s"], ["t", "u", "v"], ["w", "x", "y", "z"]];
  if (digits.length === 0) {
    return [];
  }
  else if (digits.length === 1) {
    return arrs[digits];
  }
  else {
    var arr = arrs[digits[digits.length-1]];
    for (var i = digits.length-2; i >= 0; i--) {
      if (digits[i] === 0) {
        return [];
      }
      arr = loop(arrs[digits[i]], arr);
    }
    return arr;
  }
}
function loop(arr1, arr2) {
  var a = [];
  var temp = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j in arr2) {
      temp[j] = arr1[i]+arr2[j];
    }
    a = a.concat(temp);
  }
  return a;
}
```
