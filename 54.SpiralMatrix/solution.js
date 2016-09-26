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
var matrix = [];
console.log(spiralOrder(matrix));
