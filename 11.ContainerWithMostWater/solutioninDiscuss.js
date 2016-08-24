// 11. Container With Most Water
// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.
// Note: You may not slant the container.
// /**
//  * @param {number[]} height
//  * @return {number}
//  */
var maxArea = function(height) {
  var max = 0;
  var left = 0;
  var right = height.length-1;
  while (left < right) {
    max = Math.max(max, (right-left)*Math.min(height[left], height[right]));
    (height[left] < height[right]) ? left++ : right--;
  }
  return max;
}
var height = [1, 1];
console.log(maxArea(height));
