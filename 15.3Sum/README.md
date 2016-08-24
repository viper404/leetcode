## 15.3Sum
## solution by [yavinci](https://discuss.leetcode.com/topic/28857/easiest-java-solution)
```javascript
var threeSum = function(nums) {
  if (nums.length < 3) {
    return [];
  }
  nums.sort(sortNumber);
  var arrs = [];
  for (var i = 0; i < nums.length; i++) {
    if ((i > 0) && (nums[i] === nums[i-1])) {
      continue;
    }
    var target = 0-nums[i];
    var j = i+1;
    var k = nums.length-1;
    while (j < k) {
      if (nums[j]+nums[k] === target) {
        arrs.push([nums[i], nums[j], nums[k]]);
        while ((j < k) && (nums[j] === nums[j+1])) {
          j++;
        }
        while ((j < k) && (nums[k] === nums[k-1])) {
          k--;
        }
        j++;
        k--;
      }
      else if (nums[j]+nums[k] < target) {
        j++;
      }
      else {
        k--;
      }
    }
  }
  return arrs;
}
function sortNumber(a, b) {
  return a-b;
}
```
## solution by viper404
```javascript
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
          j--;
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
```
