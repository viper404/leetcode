// 9. Palindrome Number
// Determine whether an integer is a palindrome.
// Do this without extra space.
// Some hints:
// Could negative integers be palindromes? (ie, -1)
// If you are thinking of converting the integer to string, note the restriction of using extra space.
// You could also try reversing an integer.
// However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow.
// How would you handle such case?
// There is a more generic way of solving this problem.
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  else if (x > 2147483647) {
    return false;
  }
  else {
    x = x.toString();
    x = x.split("");
    if (x.length === 1) {
      return true;
    }
    else {
      while (x.length > 1) {
        if (x[0] === x[x.length-1]) {
          x.pop();
          x.shift();
        }
        else {
          return false;
        }
      }
      return true;
    }
  }
}
var x = 2147483648;
console.log(isPalindrome(x));
