// 31. Next Permutation
// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
// The replacement must be in-place, do not allocate extra memory.
// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1
// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
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
var nums = [1];
console.log(nextPermutation(nums));
