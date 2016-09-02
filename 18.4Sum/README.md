## 18.4Sum
> ## solution by [ElementNotFoundException](https://discuss.leetcode.com/topic/33433/java-a-little-bit-faster-than-other-common-methods-9ms-beats-95)

```javascript
var fourSum = function(nums, target) {
  if (nums.length < 4) {
    return [];
  }
  nums.sort(sortNumber);
  var arrs = [];
  for (var i = 0; i < nums.length-3; i++) {
    if ((i > 0) && (nums[i] === nums[i-1])) {
      continue;
    }
    if (4*nums[i] > target) {
      return arrs;
    }
    for (var j = nums.length-1; j > i+2; j--) {
      if ((j > 0) && (nums[j] === nums[j+1])) {
        continue;
      }
      if (4*nums[j] < target) {
        break;
      }
      var left = target-nums[i]-nums[j];
      var m = i+1;
      var n = j-1;
      while (m < n) {
        if (nums[m]+nums[n] === left) {
          arrs.push([nums[i], nums[m], nums[n], nums[j]]);
          while ((m < n) && (nums[m] === nums[m+1])) {
            m++;
          }
          while ((m < n) && (nums[n] === nums[n-1])) {
            n--;
          }
          m++;
          n--;
        }
        else if (nums[m]+nums[n] < left) {
          m++;
        }
        else {
          n--;
        }
      }
    }
  }
  return arrs;
}
function sortNumber(a, b) {
  return a-b;
}
```
> ## solution by viper404

```javascript
var fourSum = function(nums, target) {
  nums.sort(sortNumber);
  var arrs = [];
  if (nums.length < 4) {
    return [];
  }
  var i = 0;
  while (i !== nums.length-3) {
    if ((i > 0) && (nums[i] === nums[i-1])) {
      i++;
      continue;
    }
    var j = i+1;
    while (j !== nums.length-2) {
      if ((j > i+1) && (nums[j] === nums[j-1])) {
        j++;
        continue;
      }
      var m = j+1;
      var n = nums.length-1;
      while (m < n) {
        var first = nums[i];
        var second = nums[j];
        var third = nums[m];
        var fourth = nums[n];
        var num = first+second+third+fourth;
        if (num > target) {
          n--;
        }
        else if (num < target) {
          m++;
        }
        else {
          var arr = [first, second, third, fourth];
          arrs.push(arr);
          while ((m < n) && (nums[n] === nums[n-1])) {
            n--;
          }
          while ((m < n) && (nums[m] === nums[m+1])) {
            m++;
          }
          if ((n-m) > 2) {
            n--;
            m++;
          }
          else {
            n--;
          }
        }
      }
      j++;
    }
    i++;
  }
  return arrs;
}
function sortNumber(a, b) {
  return a-b;
}
```
