// 46. Permutations
// Given a collection of distinct numbers, return all possible permutations.
// For example,
// [1,2,3] have the following permutations:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
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
var nums = [1,2,3];
console.log(permute(nums));
