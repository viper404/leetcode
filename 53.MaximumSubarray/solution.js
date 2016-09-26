// 53.MaximumSubarray
// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.
// More practice:
// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var res = nums[0];
  var max = nums[0];
  for (var i = 1; i < nums.length; i++) {
    var cmp = max+nums[i];
    max = (cmp > nums[i]) ? cmp : nums[i];
    if (max > res) {
      res = max;
    }
  }
  return res;
}
var nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));
