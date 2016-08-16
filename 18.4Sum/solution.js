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
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[][]}
//  */
var fourSum = function(nums, target) {
  nums.sort(sortNumber);
  var arrs = [];
  if (nums.length < 4) {
    return [];
  }
  var i = 0;
  while (i !== nums.length-3) {
    if ((i > 0) && (nums[i] === nums[i-1])) {
      i++;
      continue;
    }
    var j = i+1;
    while (j !== nums.length-2) {
      if ((j > i+1) && (nums[j] === nums[j-1])) {
        j++;
        continue;
      }
      var m = j+1;
      var n = nums.length-1;
      while (m < n) {
        var first = nums[i];
        var second = nums[j];
        var third = nums[m];
        var fourth = nums[n];
        var num = first+second+third+fourth;
        if (num > target) {
          n--;
        }
        else if (num < target) {
          m++;
        }
        else {
          var arr = [first, second, third, fourth];
          arrs.push(arr);
          while ((m < n) && (nums[n] === nums[n-1])) {
            n--;
          }
          while ((m < n) && (nums[m] === nums[m+1])) {
            m++;
          }
          if ((n-m) > 2) {
            n--;
            m++;
          }
          else {
            n--;
          }
        }
      }
      j++;
    }
    i++;
  }
  return arrs;
}
function sortNumber(a, b) {
  return a-b;
}
var nums = [1,0,-1,0,-2,2];
var target = 0;
console.log(fourSum(nums, target));
