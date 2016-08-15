// 17. Letter Combinations of a Phone Number
// Given a digit string, return all possible letter combinations that the number could represent.
// A mapping of digit to letters (just like on the telephone buttons) is given below.
// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:
// Although the above answer is in lexicographical order, your answer could be in any order you want.
// /**
//  * @param {string} digits
//  * @return {string[]}
//  */
var letterCombinations = function(digits) {
  var arrs = [[], ["*"], ["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"],
  ["j", "k", "l"], ["m", "n", "o"], ["p", "q", "r", "s"], ["t", "u", "v"], ["w", "x", "y", "z"]];
  if (digits.length === 0) {
    return [];
  }
  else if (digits.length === 1) {
    return arrs[digits];
  }
  else {
    var arr = arrs[digits[digits.length-1]];
    for (var i = digits.length-2; i >= 0; i--) {
      if (digits[i] === 0) {
        return [];
      }
      arr = loop(arrs[digits[i]], arr);
    }
    return arr;
  }
}
function loop(arr1, arr2) {
  var a = [];
  var temp = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j in arr2) {
      temp[j] = arr1[i]+arr2[j];
    }
    a = a.concat(temp);
  }
  return a;
}
var digits = "";
console.log(letterCombinations(digits));
