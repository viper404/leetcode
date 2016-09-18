// 15. 3Sum
// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
// Find all unique triplets in the array which gives the sum of zero.
// Note: The solution set must not contain duplicate triplets.
// For example, given array S = [-1, 0, 1, 2, -1, -4],
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) {
    return [];
  }
  nums.sort(sortNumber);
  var arrs = [];
  for (var i = 0; i < nums.length; i++) {
    if ((i > 0) && (nums[i] === nums[i-1])) {
      continue;
    }
    var target = 0-nums[i];
    var j = i+1;
    var k = nums.length-1;
    while (j < k) {
      if (nums[j]+nums[k] === target) {
        arrs.push([nums[i], nums[j], nums[k]]);
        while ((j < k) && (nums[j] === nums[j+1])) {
          j++;
        }
        while ((j < k) && (nums[k] === nums[k-1])) {
          k--;
        }
        j++;
        k--;
      }
      else if (nums[j]+nums[k] < target) {
        j++;
      }
      else {
        k--;
      }
    }
  }
  return arrs;
}
function sortNumber(a, b) {
  return a-b;
}
var nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
