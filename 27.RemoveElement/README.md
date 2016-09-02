## 27.RemoveElement
> ## solution by [cbmbbz](https://discuss.leetcode.com/topic/5205/9-line-java-solution)

```javascript
var removeElement = function(nums, val) {
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    while ((nums[i] === val) && (i < len)) {
      nums[i] = nums[--len];
    }
  }
  return len;
}
```
> ## solution by viper404

```javascript
var removeElement = function(nums, val) {
  if (nums.length === 0) {
    return 0;
  }
  var slow = 0;
  var last = nums.length-1;
  for (var fast = 0; fast < last+1; fast++) {
    if (nums[fast] === val) {
      while (nums[last] === val) {
        last--;
      }
      if (last < fast) {
        break;
      }
      nums[slow] = nums[last];
      last--;
      slow++;
    }
    else {
      slow++;
    }
  }
  return slow;
}
```
