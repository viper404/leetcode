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
  var mid = 0;
  var result = [-1, -1];
  while (i < j) {
    mid = Math.floor((i+j)/2);
    i = (nums[mid] < target) ? mid+1 : i;
    j = (nums[mid] < target) ? j :mid;
  }
  if (nums[i] !== target) {
    return result;
  }
  else {
    result[0] = i;
  }
  j = nums.length-1;
  while (i < j) {
    mid = Math.floor((i+j)/2)+1;
    i = (nums[mid] > target) ? i : mid;
    j = (nums[mid] > target) ? mid-1 : j;
  }
  result[1] = j;
  return result;
}
var nums = [1];
var target = 0;
console.log(searchRange(nums, target));
