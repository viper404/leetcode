// 16. 3Sum Closest
// Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.
// For example, given array S = {-1 2 1 -4}, and target = 1.
// The sum that is closest to the target is 2.
// (-1 + 2 + 1 = 2).
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
var threeSumClosest = function(nums, target) {
  nums.sort(sortNumber);
  var i = 0;
  if (nums.length < 3) {
    return 0;
  }
  var min = nums[0]+nums[1]+nums[2];
  while (i !== nums.length-2) {
    if ((i > 0) && (nums[i] === nums[i-1])) {
      i++;
      continue;
    }
    var j = i+1;
    var k = nums.length-1;
    while (j < k) {
      var left = nums[i];
      var middle = nums[j];
      var right = nums[k];
      var num = left+middle+right;
      if (num > target) {
        if (Math.abs(num-target) < Math.abs(min-target)) {
          min = num;
        }
        k--;
      }
      else if (num < target) {
        if (Math.abs(num-target) < Math.abs(min-target)) {
          min = num;
        }
        j++;
      }
      else {
        return target;
      }
    }
    i++;
  }
  return min;
}
function sortNumber(a, b) {
  return a-b;
}
var nums = [0, 0, 0];
var target = 1;
console.log(threeSumClosest(nums, target));
