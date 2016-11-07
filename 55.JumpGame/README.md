## 55.JumpGame
> ## solution by [mlblount45](https://discuss.leetcode.com/topic/36578/java-98-percentile-solution)

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length < 2) {
    return true;
  }
  for (var i = nums.length-2; i >= 0; i--) {
    if (nums[i] === 0) {
      var neededJumps = 1;
      while(neededJumps > nums[i]) {
        neededJumps++;
        i--;
        if(i < 0) {
          return false;
        }
      }
    }
  }
  return true;
}
```
> ## solution by viper404

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  var last = nums.length-1;
  for (var i = nums.length-2; i >= 0; i--) {
    if (i+nums[i] >= last) {
      last = i;
    }
  }
  return (last <= 0);
}
```
