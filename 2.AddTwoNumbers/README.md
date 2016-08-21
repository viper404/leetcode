## 2.AddTwoNumbers
## solution by [dchen0215](https://discuss.leetcode.com/topic/6220/my-accepted-java-solution)
```javascript
var addTwoNumbers = function(l1, l2) {
  var previous = new ListNode(0);
  var head = previous;
  var remain = 0;
  while ((l1 !== null) || (l2 !== null) || (remain !== 0)) {
    var sum = ((l1 === null) ? 0 : l1.val)+((l2 === null) ? 0 : l2.val)+remain;
    var current = new ListNode(sum%10);
    remain = Math.floor(sum/10);
    previous.next = current;
    previous = current;
    l1 = (l1 === null) ? l1 : l1.next;
    l2 = (l2 === null) ? l2 : l2.next;
  }
  return head.next;
}
```
## solution by viper404
```javascript
var addTwoNumbers = function(l1, l2) {
  var larger = 0;
  var flag = 0;
  var sum = 0;
  var l3 = [];
  var i = 0;
  while ((l1.next !== null) && (l2.next !== null)) {
    sum = l1.val+l2.val;
    if (flag === 1) {
      sum = sum+1;
      flag = 0;
    }
    if (sum >= 10) {
      sum = sum-10;
      flag = 1;
    }
    l3[i] = new ListNode(sum);
    if (i !== 0) {
      l3[i-1].next = l3[i];
    }
    i++;
    l1 = l1.next;
    l2 = l2.next;
  }
  if ((l1.next === null) && (l2.next === null)) {
    larger = 0;
  }
  if ((l1.next !== null) && (l2.next === null)) {
    larger = 1;
  }
  if ((l1.next === null) && (l2.next !== null)) {
    larger = 2;
  }
  if (larger === 0) {
    sum = l1.val+l2.val;
    if (flag === 1) {
      sum = sum+1;
      flag = 0;
    }
    if (sum >= 10) {
      sum = sum-10;
      flag = 1;
    }
    l3[i] = new ListNode(sum);
    if (i !== 0) {
      l3[i-1].next = l3[i];
    }
    if (flag === 1) {
      i++;
      l3[i] = new ListNode(1);
      l3[i-1].next = l3[i];
    }
  }
  if (larger === 1) {
    sum = l1.val+l2.val;
    if (flag === 1) {
      sum = sum+1;
      flag = 0;
    }
    if (sum >= 10) {
      sum = sum-10;
      flag = 1;
    }
    l3[i] = new ListNode(sum);
    if (i !== 0) {
      l3[i-1].next = l3[i];
    }
    while (l1.next !== null) {
      i++;
      l1 = l1.next;
      sum = l1.val;
      if (flag === 1) {
        sum = sum+1;
        flag = 0;
      }
      if (sum >= 10) {
        sum = sum-10;
        flag = 1;
      }
      l3[i] = new ListNode(sum);
      if (i !== 0) {
        l3[i-1].next = l3[i];
      }
    }
    if (flag === 1) {
      i++;
      l3[i] = new ListNode(1);
      l3[i-1].next = l3[i];
    }
  }
  if (larger === 2) {
    sum = l1.val+l2.val;
    if (flag === 1) {
      sum = sum+1;
      flag = 0;
    }
    if (sum >= 10) {
      sum = sum-10;
      flag = 1;
    }
    l3[i] = new ListNode(sum);
    if (i !== 0) {
      l3[i-1].next = l3[i];
    }
    while (l2.next !== null) {
      i++;
      l2 = l2.next;
      sum = l2.val;
      if (flag === 1) {
        sum = sum+1;
        flag = 0;
      }
      if (sum >= 10) {
        sum = sum-10;
        flag = 1;
      }
      l3[i] = new ListNode(sum);
      if (i !== 0) {
        l3[i-1].next = l3[i];
      }
    }
    if (flag === 1) {
      i++;
      l3[i] = new ListNode(1);
      l3[i-1].next = l3[i];
    }
  }
  return l3[0];
}
```
