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
// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
var combinationSum = function(candidates, target) {
  candidates.sort(sortNumber);
  var dp = [[[]]];
  for (var i = 1; i <= target; i++) {
    var arrs = [];
    for (var j = 0; j < candidates.length && candidates[j] <= i; j++) {
      if (candidates[j] === i) {
        arrs.push([candidates[j]]);
      }
      else {
        var prevs = dp[i-candidates[j]];
        for (var k = 0; k < prevs.length; k++) {
          var prev = prevs[k];
          if (candidates[j] <= prev[0]) {
            arrs.push([candidates[j]].concat(prev));
          }
        }
      }
    }
    dp.push(arrs);
  }
  return dp[target];
}
function sortNumber(a, b) {
  return a-b;
}
var candidates = [2,3,6,7];
var target = 7;
console.log(combinationSum(candidates, target));
