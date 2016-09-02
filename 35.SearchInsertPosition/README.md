## 35.SearchInsertPosition
> ## solution by [AmmsA](https://discuss.leetcode.com/topic/7874/my-8-line-java-solution)

```javascript
var searchInsert = function(nums, target) {
  var lo = 0;
  var hi = nums.length-1;
  while (lo <= hi) {
    var mi = Math.floor((lo+hi)/2);
    if (nums[mi] < target) {
      lo = mi+1;
    }
    else if (nums[mi] > target) {
      hi = mi-1;
    }
    else {
      return mi;
    }
  }
  return lo;
}
```
> ## solution by viper404

```javascript
var searchInsert = function(nums, target) {
  if (target < nums[0]) {
    return 0;
  }
  else if (target > nums[nums.length-1]) {
    return nums.length;
  }
  else {
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        return i;
      }
      else if (nums[i+1] === target) {
        return i+1;
      }
      else if ((nums[i] < target) && (target < nums[i+1])) {
        return i+1;
      }
    }
  }
}
```
