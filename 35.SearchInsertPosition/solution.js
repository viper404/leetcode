// 35. Search Insert Position
// Given a sorted array and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You may assume no duplicates in the array.
// Here are few examples.
// [1,3,5,6], 5 → 2
// [1,3,5,6], 2 → 1
// [1,3,5,6], 7 → 4
// [1,3,5,6], 0 → 0
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
var searchInsert = function(nums, target) {
  if (target < nums[0]) {
    return 0;
  }
  else if (target > nums[nums.length-1]) {
    return nums.length;
  }
  else {
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        return i;
      }
      else if (nums[i+1] === target) {
        return i+1;
      }
      else if ((nums[i] < target) && (target < nums[i+1])) {
        return i+1;
      }
    }
  }
}
var nums = [1];
var target = 0;
