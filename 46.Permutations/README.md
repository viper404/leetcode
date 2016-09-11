## 46.Permutations
> ## solution by [cbmbbz](https://discuss.leetcode.com/topic/6377/my-ac-simple-iterative-java-python-solution)

```javascript
var permute = function(nums) {
  if (nums.length === 0) {
    return [];
  }
  var arrs = [[nums[0]]];
  for (var i = 1; i < nums.length; i++) {
    var newArrs = [];
    for (var j = 0; j <= i; j++) {
      for (var k = 0; k < arrs.length; k++) {
        var temp = [].concat(arrs[k]);
        temp.splice(j, 0, nums[i]);
        newArrs.push(temp);
      }
    }
    arrs = newArrs;
  }
  return arrs;
}
```
> ## solution by viper404

```javascript
var permute = function(nums) {
  var arrs = [];
  helper(nums, 0, [], arrs);
  return arrs;
}
function helper(nums, index, arr, arrs) {
  if (nums.length === 0) {
    arrs.push(arr);
  }
  else {
    for (var i = 0; i < nums.length; i++) {
      var newNums = [].concat(nums);
      var newNum = newNums[i];
      newNums.splice(i, 1);
      helper(newNums, 0, arr.concat([newNum]), arrs);
    }
  }
}
```
