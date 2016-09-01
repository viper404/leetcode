## 34.SearchforaRange
## solution by [stellari](https://discuss.leetcode.com/topic/5891/clean-iterative-solution-with-two-binary-searches-with-explanation)
```javascript
var searchRange = function(nums, target) {
  var i = 0;
  var j = nums.length-1;
  var mid = 0;
  var result = [-1, -1];
  while (i < j) {
    mid = Math.floor((i+j)/2);
    i = (nums[mid] < target) ? mid+1 : i;
    j = (nums[mid] < target) ? j :mid;
  }
  if (nums[i] !== target) {
    return result;
  }
  else {
    result[0] = i;
  }
  j = nums.length-1;
  while (i < j) {
    mid = Math.floor((i+j)/2)+1;
    i = (nums[mid] > target) ? i : mid;
    j = (nums[mid] > target) ? mid-1 : j;
  }
  result[1] = j;
  return result;
}
```
## solution by viper404
```javascript
var searchRange = function(nums, target) {
  var i = 0;
  var j = nums.length-1;
  while (nums[i] < nums[j]) {
    i = (nums[i] === target) ? i : i+1;
    j = (nums[j] === target) ? j : j-1;
  }
  return (nums[i] === target) ? [i, j] : [-1, -1];
}
```
