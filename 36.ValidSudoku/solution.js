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
  var str = "";
  for (var i = 0; i < board.length; i++) {
    str = str+board[i].join("");
  }
  for (var j = 0; j < 9; j++) {
    var str1 = str[0+9*j]+str[1+9*j]+str[2+9*j]+str[3+9*j]+str[4+9*j]+str[5+9*j]+str[6+9*j]+str[7+9*j]+str[8+9*j];
    var str2 = str[0+j]+str[9+j]+str[18+j]+str[27+j]+str[36+j]+str[45+j]+str[54+j]+str[63+j]+str[72+j];
    if (helper(str1) || helper(str2)) {
      return false;
    }
  }
  for (var m = 0; m < 3; m++) {
    for (var n = 0; n < 3; n++) {
      var str3 = str[0+27*m+3*n]+str[1+27*m+3*n]+str[2+27*m+3*n]+str[9+27*m+3*n]+str[10+27*m+3*n]+str[11+27*m+3*n]
      +str[18+27*m+3*n]+str[19+27*m+3*n]+str[20+27*m+3*n];
      if (helper(str3)) {
        return false;
      }
    }
  }
  return true;
}
function helper(str) {
  var patt = /\./g;
  str = str.replace(patt, "");
  str = str.split("");
  str.sort(sortNumber);
  if (str.length === 0) {
    return false;
  }
  for (var i = 0; i < str.length-1; i++) {
    if (str[i] === str[i+1]) {
      return true;
    }
  }
  return false;
}
function sortNumber(a, b) {
    return a-b;
}
var board = [".87654321","2........","3........","4........","5........","6........","7........","8........","9........"];
console.log(isValidSudoku(board));
