## 36.ValidSudoku
> ## solution by [StefanPochmann](https://discuss.leetcode.com/topic/27436/short-simple-java-using-strings)

```javascript
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
```
> ## solution by viper404

```javascript
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
```
