// 1. Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// UPDATE (2016/2/13):
// The return format had been changed to zero-based indices. Please read the above updated description carefully.
var twoSum = function(nums, target) {
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }
    map.set(target-nums[i], i);
  }
}
var nums = [2, 7, 11, 15];
var target = 9;
console.log(twoSum(nums, target));
