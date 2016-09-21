// 46. Permutations
// Given a collection of distinct numbers, return all possible permutations.
// For example,
// [1,2,3] have the following permutations:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var arrs = [];
  helper(nums, 0, [], arrs);
  return arrs;
}
function helper(nums, index, arr, arrs) {
  if (nums.length === 0) {
    arrs.push(arr);
  }
  else {
    for (var i = 0; i < nums.length; i++) {
      var newNums = [].concat(nums);
      var newNum = newNums[i];
      newNums.splice(i, 1);
      helper(newNums, 0, arr.concat([newNum]), arrs);
    }
  }
}
var nums = [1,2,3];
console.log(permute(nums));
