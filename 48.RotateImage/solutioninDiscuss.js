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
var matrix = [[1]];
rotate(matrix);
console.log(matrix);
