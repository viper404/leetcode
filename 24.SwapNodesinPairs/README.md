## 24.SwapNodesinPairs
> ## solution by [tusizi](https://discuss.leetcode.com/topic/10649/my-simple-java-solution-for-share)

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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  var dummy = new ListNode(0);
  dummy.next = head;
  var current = dummy;
  while ((current.next !== null) && (current.next.next !== null)) {
    var first = current.next;
    var second = current.next.next;
    first.next = second.next;
    current.next = second;
    current.next.next = first;
    current = current.next.next;
  }
  return dummy.next;
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head === null) {
    return null;
  }
  if (head.next !== null) {
    var i = head;
    var j = i.next;
    var k = j.next;
    j.next = i;
    i.next = swapPairs(k);
    head = j;
  }
  return head;
}
```
