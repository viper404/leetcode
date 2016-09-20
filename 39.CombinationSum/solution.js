// 39. Combination Sum
// Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.
// The same repeated number may be chosen from C unlimited number of times.
// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// For example, given candidate set [2, 3, 6, 7] and target 7,
// A solution set is:
// [
//   [7],
//   [2, 2, 3]
// ]
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  var arrs = [];
  candidates.sort(sortNumber);
  helper(candidates, target, 0, [], arrs);
  return arrs;
}
function helper(candidates, target, index, arr, arrs) {
  if (target === 0) {
    arrs.push(arr);
    return;
  }
  for (var i = index; i < candidates.length; i++) {
    if (target >= candidates[i]) {
      helper(candidates, target-candidates[i], i, arr.concat([candidates[i]]), arrs);
    }
    else {
      break;
    }
  }
}
function sortNumber(a, b) {
  return a-b;
}
var candidates = [2,3,6,7];
var target = 7;
console.log(combinationSum(candidates, target));
