// 54. Spiral Matrix
// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
// For example,
// Given the following matrix:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// You should return [1,2,3,6,9,8,7,4,5].
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
var matrix = [];
console.log(spiralOrder(matrix));
