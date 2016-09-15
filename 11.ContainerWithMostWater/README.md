## 11.ContainerWithMostWater
> ## solution by [kongweihan](https://discuss.leetcode.com/topic/3462/yet-another-way-to-see-what-happens-in-the-o-n-algorithm)

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
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
```
> ## solution by viper404

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var i = 0;
  var j = height.length-1;
  var max = 0;
  while (i < j) {
    max = Math.max(max, (j-i)*Math.min(height[i], height[j]));
    if (height[i] <= height[j]) {
      i++;
    }
    else {
      j--;
    }
  }
  return max;
}
```
