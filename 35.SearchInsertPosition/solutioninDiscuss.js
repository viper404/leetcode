// 35. Search Insert Position
// Given a sorted array and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You may assume no duplicates in the array.
// Here are few examples.
// [1,3,5,6], 5 → 2
// [1,3,5,6], 2 → 1
// [1,3,5,6], 7 → 4
// [1,3,5,6], 0 → 0
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var lo = 0;
  var hi = nums.length-1;
  while (lo <= hi) {
    var mi = Math.floor((lo+hi)/2);
    if (nums[mi] < target) {
      lo = mi+1;
    }
    else if (nums[mi] > target) {
      hi = mi-1;
    }
    else {
      return mi;
    }
  }
  return lo;
}
var nums = [1];
var target = 0;
