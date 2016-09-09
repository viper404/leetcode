// 48. Rotate Image
// You are given an n x n 2D matrix representing an image.
// Rotate the image by 90 degrees (clockwise).
// Follow up:
// Could you do this in-place?
// /**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */
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
var matrix = [[1]];
rotate(matrix);
console.log(matrix);
