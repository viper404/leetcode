// 16. 3Sum Closest
// Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.
// For example, given array S = {-1 2 1 -4}, and target = 1.
// The sum that is closest to the target is 2.
// (-1 + 2 + 1 = 2).
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length < 3) {
    return 0;
  }
  nums.sort(sortNumber);
  var sum = nums[0]+nums[1]+nums[2];
  var min = sum;
  for (var i = 0; i < nums.length-2; i++) {
    if ((i > 0) && (nums[i] === nums[i-1])) {
      continue;
    }
    var j = i+1;
    var k = nums.length-1;
    while (j < k) {
      sum = nums[i]+nums[j]+nums[k];
      if (sum < target) {
        while ((j < k) && (nums[j] === nums[j+1])) {
          j++;
        }
        while ((j < k) && (nums[k] === nums[k-1])) {
          k--;
        }
        j++;
      }
      else if (sum > target) {
        while ((j < k) && (nums[j] === nums[j+1])) {
          j++;
        }
        while ((j < k) && (nums[k] === nums[k-1])) {
          k--;
        }
        k--;
      }
      else {
        return sum;
      }
      if (Math.abs(target-sum) < Math.abs(target-min)) {
        min = sum;
      }
    }
  }
  return min;
}
function sortNumber(a, b) {
  return a-b;
}
var nums = [0, 0, 0];
var target = 1;
console.log(threeSumClosest(nums, target));
