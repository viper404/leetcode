// 49. Group Anagrams
// Given an array of strings, group anagrams together.
// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Return:
// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note: All inputs will be in lower-case.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var arrs = [];
  var newStrs = [];
  for (var i = 0; i < strs.length; i++) {
    var cmp = strs[i];
    cmp = cmp.split("");
    cmp.sort();
    cmp = cmp.join("");
    newStrs.push(cmp);
  }
  var k = 0;
  var map = new Map();
  for (var j = 0; j < strs.length; j++) {
    if (map.has(newStrs[j])) {
      arrs[map.get(newStrs[j])].push(strs[j]);
    }
    else {
      arrs[k] = [];
      arrs[k].push(strs[j]);
      map.set(newStrs[j], k);
      k++;
    }
  }
  return arrs;
}
var strs = [""];
console.log(groupAnagrams(strs));
