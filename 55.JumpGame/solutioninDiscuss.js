// 55. Jump Game
// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Determine if you are able to reach the last index.
// For example:
// A = [2,3,1,1,4], return true.
// A = [3,2,1,0,4], return false.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length < 2) {
    return true;
  }
  for (var i = nums.length-2; i >= 0; i--) {
    if (nums[i] === 0) {
      var neededJumps = 1;
      while(neededJumps > nums[i]) {
        neededJumps++;
        i--;
        if(i < 0) {
          return false;
        }
      }
    }
  }
  return true;
}
var nums = [0];
console.log(canJump(nums));
