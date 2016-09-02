## 16.3SumClosest
> ## solution by [spritmouselet](https://discuss.leetcode.com/topic/5192/java-solution-with-o-n2-for-reference)

```javascript
var threeSumClosest = function(nums, target) {
  if (nums.length < 3) {
    return 0;
  }
  nums.sort(sortNumber);
  var sum = nums[0]+nums[1]+nums[2];
  var min = sum;
  for (var i = 0; i < nums.length-2; i++) {
    if ((i > 0) && (nums[i] === nums[i-1])) {
      continue;
    }
    var j = i+1;
    var k = nums.length-1;
    while (j < k) {
      sum = nums[i]+nums[j]+nums[k];
      if (sum < target) {
        while ((j < k) && (nums[j] === nums[j+1])) {
          j++;
        }
        while ((j < k) && (nums[k] === nums[k-1])) {
          k--;
        }
        j++;
      }
      else if (sum > target) {
        while ((j < k) && (nums[j] === nums[j+1])) {
          j++;
        }
        while ((j < k) && (nums[k] === nums[k-1])) {
          k--;
        }
        k--;
      }
      else {
        return sum;
      }
      if (Math.abs(target-sum) < Math.abs(target-min)) {
        min = sum;
      }
    }
  }
  return min;
}
function sortNumber(a, b) {
  return a-b;
}
```
> ## solution by viper404

```javascript
var threeSumClosest = function(nums, target) {
  nums.sort(sortNumber);
  var i = 0;
  if (nums.length < 3) {
    return 0;
  }
  var min = nums[0]+nums[1]+nums[2];
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
      if (num > target) {
        if (Math.abs(num-target) < Math.abs(min-target)) {
          min = num;
        }
        k--;
      }
      else if (num < target) {
        if (Math.abs(num-target) < Math.abs(min-target)) {
          min = num;
        }
        j++;
      }
      else {
        return target;
      }
    }
    i++;
  }
  return min;
}
function sortNumber(a, b) {
  return a-b;
}
```
