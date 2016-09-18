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
  nums.sort(sortNumber);
  var arrs = [];
  var i = 0;
  if (nums.length < 3) {
    return [];
  }
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
      if (num > 0) {
        k--;
      }
      else if (num < 0) {
        j++;
      }
      else {
        var arr = [left, middle, right];
        arrs.push(arr);
        while ((j < k) && (nums[k] === nums[k-1])) {
          k--;
        }
        while ((j < k) && (nums[j] === nums[j+1])) {
          j++;
        }
        if ((k-j) > 2) {
          k--;
          j++;
        }
        else {
          k--;
        }
      }
    }
    i++;
  }
  return arrs;
}
function sortNumber(a, b) {
  return a-b;
}
var nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
