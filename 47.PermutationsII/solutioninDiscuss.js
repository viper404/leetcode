// 47. Permutations II
// Given a collection of numbers that might contain duplicates, return all possible unique permutations.
// For example,
// [1,1,2] have the following unique permutations:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (nums.length === 0) {
    return [];
  }
  var res = [[nums[0]]];
  var cache = new Map();
  for (var i = 1; i < nums.length; i++) {
    while (res[0].length === i) {
      var l = res.shift();
      for (var j = 0; j < l.length+1; j++) {
        var newL = [].concat(l);
        newL.splice(j, 0, nums[i]);
        if (!cache.has(newL.toString())) {
          cache.set(newL.toString(), 0);
          res.push(newL);
        }
      }
    }
  }
  return res;
}
var nums = [1,1,2];
console.log(permuteUnique(nums));
