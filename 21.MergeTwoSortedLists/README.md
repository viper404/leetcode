## 21.MergeTwoSortedLists
> ## solution by [nightowl](https://discuss.leetcode.com/topic/22199/simple-recursive-java-solution)

```javascript
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
  else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}
```
> ## solution by viper404

```javascript
var mergeTwoLists = function(l1, l2) {
  if ((l1 === null) && (l2 === null)) {
    return [];
  }
  else if (l1 === null) {
    return l2;
  }
  else if (l2 === null) {
    return l1;
  }
  else {
    var fast = 0;
    var slow = 0;
    var flag = 0;
    if (l1.val < l2.val) {
      fast = l1;
      slow = l2;
      flag = 0;
    }
    else {
      fast = l2;
      slow = l1;
      flag = 1;
    }
    var temp1 = 0;
    var temp2 = 0;
    var temp3 = 0;
    loop:
    while (fast.next !== null) {
      temp1 = fast;
      fast = fast.next;
      if (fast.val > slow.val) {
        temp2 = fast;
        fast = temp1;
        fast.next = slow;
        fast = fast.next;
        while (temp2.val > fast.val) {
          if (slow.next === null) {
            fast.next = temp2;
            fast = fast.next;
            break loop;
          }
          temp3 = fast;
          fast = fast.next;
          slow = slow.next;
        }
        fast = temp3;
        fast.next = temp2;
      }
    }
    if (flag === 0) {
      if (slow.val < fast.val) {
        return l1;
      }
      else {
        fast.next = slow;
        return l1;
      }
    }
    if (flag === 1) {
      if (slow.val < fast.val) {
        return l2;
      }
      else {
        fast.next = slow;
        return l2;
      }
    }
  }
}
```
