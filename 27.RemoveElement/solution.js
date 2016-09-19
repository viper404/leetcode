// 27. Remove Element
// Given an array and a value, remove all instances of that value in place and return the new length.
// Do not allocate extra space for another array, you must do this in place with constant memory.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.
// Example:
// Given input array nums = [3,2,2,3], val = 3
// Your function should return length = 2, with the first two elements of nums being 2.
// Hint:
// 1. Try two pointers.
// 2. Did you use the property of "the order of elements can be changed"?
// 3. What happens when the elements to remove are rare?
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (nums.length === 0) {
    return 0;
  }
  var slow = 0;
  var last = nums.length-1;
  for (var fast = 0; fast < last+1; fast++) {
    if (nums[fast] === val) {
      while (nums[last] === val) {
        last--;
      }
      if (last < fast) {
        break;
      }
      nums[slow] = nums[last];
      last--;
      slow++;
    }
    else {
      slow++;
    }
  }
  return slow;
}
var nums = [3,2,2,3];
var val = 3;
console.log(removeElement(nums, val));
