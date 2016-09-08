// 47. Permutations II
// Given a collection of numbers that might contain duplicates, return all possible unique permutations.
// For example,
// [1,1,2] have the following unique permutations:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
var permuteUnique = function(nums) {
  var arrs = [];
  nums.sort(sortNumber);
  helper(nums, 0, [], arrs);
  return arrs;
}
function helper(nums, index, arr, arrs) {
  if (nums.length === 0) {
    arrs.push(arr);
  }
  else {
    for (var i = 0; i < nums.length; i++) {
      if ((i > 0) && (nums[i] === nums[i-1])) {
        continue;
      }
      var newNums = [].concat(nums);
      var newNum = newNums[i];
      newNums.splice(i, 1);
      helper(newNums, 0, arr.concat([newNum]), arrs);
    }
  }
}
function sortNumber(a, b) {
  return a-b;
}
var nums = [1,1,2];
console.log(permuteUnique(nums));
