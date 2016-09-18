## 19.RemoveNthNodeFromEndofList
> ## solution by [TMS](https://discuss.leetcode.com/topic/7031/simple-java-solution-in-one-pass)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var start = new ListNode(0);
  var fast = start;
  var slow = start;
  slow.next = head;
  for (var i = 0; i < n+1; i++) {
    fast = fast.next;
  }
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return start.next;
}
```
> ## solution by viper404

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var fast = head;
  var slow = head;
  if (head.next === null) {
    return [];
  }
  for (var i = 0; i < n; i++) {
    if (fast.next === null) {
      return head.next;
    }
    fast = fast.next;
  }
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  var temp = slow.next;
  slow.next = temp.next;
  return head;
}
```
