## 40.CombinationSumII
> ## solution by viper404

```javascript
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
```
