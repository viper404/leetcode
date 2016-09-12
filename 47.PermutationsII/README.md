## 47.PermutationsII
> ## solution by [shpolsky](https://discuss.leetcode.com/topic/12923/short-iterative-java-solution)

```javascript
var permuteUnique = function(nums) {
  if (nums.length === 0) {
    return [];
  }
  var res = [[nums[0]]];
  var cache = new Map();
  for (var i = 1; i < nums.length; i++) {
    while (res[0].length === i) {
      var l = res.shift();
      for (var j = 0; j < l.length+1; j++) {
        var newL = [].concat(l);
        newL.splice(j, 0, nums[i]);
        if (!cache.has(newL.toString())) {
          cache.set(newL.toString(), 0);
          res.push(newL);
        }
      }
    }
  }
  return res;
}
```
> ## solution by viper404

```javascript
var permuteUnique = function(nums) {
  var arrs = [];
  nums.sort(sortNumber);
  helper(nums, 0, [], arrs);
  return arrs;
}
function helper(nums, index, arr, arrs) {
  if (nums.length === 0) {
    arrs.push(arr);
  }
  else {
    for (var i = 0; i < nums.length; i++) {
      if ((i > 0) && (nums[i] === nums[i-1])) {
        continue;
      }
      var newNums = [].concat(nums);
      var newNum = newNums[i];
      newNums.splice(i, 1);
      helper(newNums, 0, arr.concat([newNum]), arrs);
    }
  }
}
function sortNumber(a, b) {
  return a-b;
}
```
