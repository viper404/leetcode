// 40. Combination Sum II
// Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.
// Each number in C may only be used once in the combination.
// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
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
    if ((i > index) && (candidates[i] === candidates[i-1])) {
      continue;
    }
    if (target >= candidates[i]) {
      helper(candidates, target-candidates[i], i+1, arr.concat(candidates[i]), arrs);
    }
    else {
      break;
    }
  }
}
function sortNumber(a, b) {
  return a-b;
}
var candidates = [10,1,2,7,6,1,5];
var target = 8;
console.log(combinationSum2(candidates, target));
