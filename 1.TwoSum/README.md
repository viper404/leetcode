## 1.TwoSum
> ## solution by [waisuan](https://discuss.leetcode.com/topic/16687/my-short-java-solution-o-n-hashmap)

```javascript
var twoSum = function(nums, target) {
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }
    map.set(target-nums[i], i);
  }
}
```
> ## solution by viper404

```javascript
var twoSum = function(nums, target) {
  var first = 0;
  var second = 0;
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    if ((map.has(nums[i])) && (nums[i] === target/2)) {
      second = i;
      first = map.get(target-nums[i]);
    }
    else {
      map.set(nums[i], i);
      if (map.has(target-nums[i])) {
        second = i;
        if (second !== map.get(target-nums[i])) {
          first = map.get(target-nums[i]);
          break;
        }
      }
    }
  }
  return [first, second];
}
```
