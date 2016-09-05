## 39.CombinationSum
> ## solution by [shpolsky](https://discuss.leetcode.com/topic/8200/iterative-java-dp-solution)

```javascript
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
```
> ## solution by viper404

```javascript
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
```
