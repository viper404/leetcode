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
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    while ((nums[i] === val) && (i < len)) {
      nums[i] = nums[--len];
    }
  }
  return len;
}
var nums = [3,2,2,3];
var val = 3;
console.log(removeElement(nums, val));
