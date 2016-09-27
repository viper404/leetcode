## 54.SpiralMatrix
> ## solution by [qwl5004](https://discuss.leetcode.com/topic/3713/super-simple-and-easy-to-understand-solution)

```javascript
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  var res = [];
  if (matrix.length === 0) {
    return res;
  }
  var rowBegin = 0;
  var rowEnd = matrix.length-1;
  var colBegin = 0;
  var colEnd = matrix[0].length-1;
  while ((rowBegin <= rowEnd) && (colBegin <= colEnd)) {
    var i = 0;
    for (i = colBegin; i <= colEnd; i++) {
      res.push(matrix[rowBegin][i]);
    }
    rowBegin++;
    for (i = rowBegin; i <= rowEnd; i++) {
      res.push(matrix[i][colEnd]);
    }
    colEnd--;
    if (rowBegin <= rowEnd) {
      for (i = colEnd; i >= colBegin; i--) {
        res.push(matrix[rowEnd][i]);
      }
    }
    rowEnd--;
    if (colBegin <= colEnd) {
      for (i = rowEnd; i >= rowBegin; i--) {
        res.push(matrix[i][colBegin]);
      }
    }
    colBegin++;
  }
  return res;
}
```
> ## solution by viper404

```javascript
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) {
    return [];
  }
  var arr = [];
  var count = matrix.length*matrix[0].length;
  while (matrix.length > 0) {
    arr = arr.concat(matrix.shift());
    if (arr.length === count) {
      break;
    }
    for (var i = 0; i < matrix.length-1; i++) {
      arr.push(matrix[i].pop());
    }
    if (arr.length === count) {
      break;
    }
    arr = arr.concat(matrix.pop().reverse());
    if (arr.length === count) {
      break;
    }
    for (var j = matrix.length-1; j > -1; j--) {
      arr.push(matrix[j].shift());
    }
    if (arr.length === count) {
      break;
    }
  }
  return arr;
}
```
