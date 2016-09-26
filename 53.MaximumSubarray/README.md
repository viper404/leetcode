## 53.MaximumSubarray
> ## solution by [FujiwaranoSai](https://discuss.leetcode.com/topic/6413/dp-solution-some-thoughts)

```javascript
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
```
> ## solution by viper404

```javascript
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
```
