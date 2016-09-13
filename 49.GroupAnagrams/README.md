## 49.GroupAnagrams
> ## solution by [wz366](https://discuss.leetcode.com/topic/24494/share-my-short-java-solution)

```javascript
var groupAnagrams = function(strs) {
  var arrs = [];
  if (strs.length === 0) {
    return [];
  }
  var map = new Map();
  for (var i = 0; i < strs.length; i++) {
    var cmp = strs[i].split("");
    cmp.sort();
    var str = cmp.join("");
    if (map.has(str)) {
      var arr = map.get(str);
      arr.push(strs[i]);
    }
    else {
      map.set(str, [strs[i]]);
    }
  }
  for (var value of map.values()) {
    arrs.push(value);
  }
  return arrs;
}
```
> ## solution by viper404

```javascript
var groupAnagrams = function(strs) {
  var arrs = [];
  var newStrs = [];
  for (var i = 0; i < strs.length; i++) {
    var cmp = strs[i];
    cmp = cmp.split("");
    cmp.sort();
    cmp = cmp.join("");
    newStrs.push(cmp);
  }
  var k = 0;
  var map = new Map();
  for (var j = 0; j < strs.length; j++) {
    if (map.has(newStrs[j])) {
      arrs[map.get(newStrs[j])].push(strs[j]);
    }
    else {
      arrs[k] = [];
      arrs[k].push(strs[j]);
      map.set(newStrs[j], k);
      k++;
    }
  }
  return arrs;
}
```
