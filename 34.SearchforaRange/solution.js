// 34. Search for a Range
// Given a sorted array of integers, find the starting and ending position of a given target value.
// If the target is not found in the array, return [-1, -1].
// For example,
// Given [5, 7, 7, 8, 8, 10] and target value 8,
// return [3, 4].
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var i = 0;
  var j = nums.length-1;
  while (nums[i] < nums[j]) {
    i = (nums[i] === target) ? i : i+1;
    j = (nums[j] === target) ? j : j-1;
  }
  return (nums[i] === target) ? [i, j] : [-1, -1];
}
var nums = [1];
var target = 0;
console.log(searchRange(nums, target));
