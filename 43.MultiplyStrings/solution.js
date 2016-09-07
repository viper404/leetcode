// 43. Multiply Strings
// Given two numbers represented as strings, return multiplication of the numbers as a string.
// Note:
// The numbers can be arbitrarily large and are non-negative.
// Converting the input string to integer is NOT allowed.
// You should NOT use internal library such as BigInteger.
// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
var multiply = function(num1, num2) {
  if ((num1 === "0") || (num2 === "0")) {
    return "0";
  }
  var str = "0123456789";
  var arr = [];
  for (var n = 0; n < num1.length+num2.length; n++) {
    arr[n] = 0;
  }
  for (var i = num1.length-1; i >= 0; i--) {
    for (var j = num2.length-1; j >= 0; j--) {
      arr[i+j+1] = arr[i+j+1]+str.indexOf(num1[i])*str.indexOf(num2[j]);
    }
  }
  var carry = 0;
  for (var k = arr.length-1; k >= 0; k--) {
    var temp = (arr[k]+carry)%10;
    carry = Math.floor((arr[k]+carry)/10);
    arr[k] = temp;
  }
  if (arr[0] === 0) {
    arr.shift();
  }
  return arr.join("");
}
var num1 = "0";
var num2 = "0";
console.log(multiply(num1, num2));
