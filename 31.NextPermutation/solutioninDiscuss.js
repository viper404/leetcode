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
var nums = [1];
console.log(nextPermutation(nums));
