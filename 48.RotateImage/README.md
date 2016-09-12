## 48.RotateImage
> ## solution by [LuckyIdiot](https://discuss.leetcode.com/topic/9744/ac-java-in-place-solution-with-explanation-easy-to-understand)

```javascript
var rotate = function(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = i; j < matrix[0].length; j++) {
      var temp1 = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp1;
    }
  }
  for (var m = 0; m < matrix.length; m++) {
    for (var n = 0; n < Math.floor(matrix.length/2); n++) {
      var temp2 = matrix[m][n];
      matrix[m][n] = matrix[m][matrix.length-1-n];
      matrix[m][matrix.length-1-n] = temp2;
    }
  }
}
```
> ## solution by viper404

```javascript
var rotate = function(matrix) {
  var n = matrix.length;
  for (var j = 0; j < Math.floor(n/2); j++) {
    for (var i = 0; i < n-1-2*j; i++) {
      var temp = matrix[n-1-j][n-1-i-j];
      matrix[n-1-j][n-1-i-j] = matrix[i+j][n-1-j];
      matrix[i+j][n-1-j] = matrix[0+j][i+j];
      matrix[0+j][i+j] = matrix[n-1-i-j][0+j];
      matrix[n-1-i-j][0+j] = temp;
    }
  }
}
```
