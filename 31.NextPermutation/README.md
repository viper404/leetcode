## 31.NextPermutation
> ## solution by [jianchao.li.fighter](https://discuss.leetcode.com/topic/15216/a-simple-algorithm-from-wikipedia-with-c-implementation-can-be-used-in-permutations-and-permutations-ii)

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  var k = -1;
  for (var i = nums.length-2; i >= 0; i--) {
    if (nums[i] < nums[i+1]) {
      k = i;
      break;
    }
  }
  if (k === -1) {
    reverse(nums, 0, nums.length-1);
    return;
  }
  var l = -1;
  for (var j = nums.length-1; j > k; j--) {
    if (nums[j] > nums[k]) {
      l = j;
      break;
    }
  }
  var temp = nums[k];
  nums[k] = nums[l];
  nums[l] = temp;
  reverse(nums, k+1, nums.length-1);
  return;
}
function reverse(arr, begin, end) {
  while (begin < end) {
    var temp = arr[end];
    arr[end] = arr[begin];
    arr[begin] = temp;
    begin++;
    end--;
  }
}
```
> ## solution by viper404

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums.length === 1) {
    return;
  }
  if (nums.length === 2) {
    helper(nums, 0, nums.length-1);
    return;
  }
  var i = nums.length-2;
  while (nums[i] >= nums[i+1]) {
    i--;
  }
  if (i !== -1) {
    var j = nums.length-1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    helper(nums, i+1, nums.length-1);
  }
  else {
    helper(nums, 0, nums.length-1);
  }
  return;
}
function helper(arr, begin, end) {
  while (begin < end) {
    var temp = arr[end];
    arr[end] = arr[begin];
    arr[begin] = temp;
    begin++;
    end--;
  }
}
```
