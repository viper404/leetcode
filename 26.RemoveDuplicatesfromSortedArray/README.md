## 26.RemoveDuplicatesfromSortedArray
## solution by [StefanPochmann](https://discuss.leetcode.com/topic/17252/5-lines-c-java-nicer-loops)
```javascript
var removeDuplicates = function(nums) {
  var i = (nums.length > 0) ? 1 : 0;
  for (var j in nums) {
    if (nums[j] > nums[i-1]) {
      nums[i++] = nums[j];
    }
  }
  return i;
}
```
## solution by viper404
```javascript
var removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return [];
  }
  var slow = 1;
  for (var fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[fast-1]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;
}
```
