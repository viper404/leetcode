// 28. Implement strStr()
// Implement strStr().
// Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
var strStr = function(haystack, needle) {
  if (needle === "") {
    return 0;
  }
  for (var i = 0; i < haystack.length-needle.length+1; i++) {
    if ((haystack[i] === needle[0]) && (haystack[i+needle.length-1] === needle[needle.length-1])) {
      var j = i;
      while (j < i+needle.length-1) {
        if (haystack[j] !== needle[j-i]) {
          break;
        }
        j++;
      }
      if (j === i+needle.length-1) {
        return i;
      }
    }
  }
  return -1;
}
var haystack = "";
var needle = "";
console.log(strStr(haystack, needle));
