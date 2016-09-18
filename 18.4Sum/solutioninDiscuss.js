// 18. 4Sum
// Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target?
// Find all unique quadruplets in the array which gives the sum of target.
// Note: The solution set must not contain duplicate quadruplets.
// For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.
// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) {
    return [];
  }
  nums.sort(sortNumber);
  var arrs = [];
  for (var i = 0; i < nums.length-3; i++) {
    if ((i > 0) && (nums[i] === nums[i-1])) {
      continue;
    }
    if (4*nums[i] > target) {
      return arrs;
    }
    for (var j = nums.length-1; j > i+2; j--) {
      if ((j > 0) && (nums[j] === nums[j+1])) {
        continue;
      }
      if (4*nums[j] < target) {
        break;
      }
      var left = target-nums[i]-nums[j];
      var m = i+1;
      var n = j-1;
      while (m < n) {
        if (nums[m]+nums[n] === left) {
          arrs.push([nums[i], nums[m], nums[n], nums[j]]);
          while ((m < n) && (nums[m] === nums[m+1])) {
            m++;
          }
          while ((m < n) && (nums[n] === nums[n-1])) {
            n--;
          }
          m++;
          n--;
        }
        else if (nums[m]+nums[n] < left) {
          m++;
        }
        else {
          n--;
        }
      }
    }
  }
  return arrs;
}
function sortNumber(a, b) {
  return a-b;
}
var nums = [1,0,-1,0,-2,2];
var target = 0;
console.log(fourSum(nums, target));
