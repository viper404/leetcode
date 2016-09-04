// 36. Valid Sudoku
// Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.
// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
// Note:
// A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.
// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
var isValidSudoku = function(board) {
  var map = new Map();
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        var str = "("+board[i][j]+")";
        if ((map.has(str+i)) || (map.has(j+str)) || (map.has(Math.floor(i/3)+str+Math.floor(j/3)))) {
          return false;
        }
        else {
          map.set(str+i, 0);
          map.set(j+str, 0);
          map.set(Math.floor(i/3)+str+Math.floor(j/3), 0);
        }
      }
    }
  }
  return true;
}
var board = [".87654321","2........","3........","4........","5........","6........","7........","8........","9........"];
console.log(isValidSudoku(board));
