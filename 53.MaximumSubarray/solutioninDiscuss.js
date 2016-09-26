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
  var dp = [];
  dp[0] = nums[0];
  var max = dp[0];
  for (var i = 1; i < nums.length; i++) {
    dp[i] = (dp[i-1] > 0) ? dp[i-1]+nums[i] : nums[i];
    max = Math.max(dp[i], max);
  }
  return max;
}
var nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));
