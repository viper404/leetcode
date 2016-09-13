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
// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
var groupAnagrams = function(strs) {
  var arrs = [];
  if (strs.length === 0) {
    return [];
  }
  var map = new Map();
  for (var i = 0; i < strs.length; i++) {
    var cmp = strs[i].split("");
    cmp.sort();
    var str = cmp.join("");
    if (map.has(str)) {
      var arr = map.get(str);
      arr.push(strs[i]);
    }
    else {
      map.set(str, [strs[i]]);
    }
  }
  for (var value of map.values()) {
    arrs.push(value);
  }
  return arrs;
}
var strs = [""];
console.log(groupAnagrams(strs));
