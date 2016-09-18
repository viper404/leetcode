// 17. Letter Combinations of a Phone Number
// Given a digit string, return all possible letter combinations that the number could represent.
// A mapping of digit to letters (just like on the telephone buttons) is given below.
// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:
// Although the above answer is in lexicographical order, your answer could be in any order you want.
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
var digits = "";
console.log(letterCombinations(digits));
