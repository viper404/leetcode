## 206.ReverseLinkedList
> ## solution by [braydenCN](https://discuss.leetcode.com/topic/13268/in-place-iterative-and-recursive-java-solution)

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
var reverseList = function(head) {
  return helper(head, null);
}
function helper(head, left) {
  if (head === null) {
    return left;
  }
  var right = head.next;
  head.next = left;
  return helper(right, head);
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
var reverseList = function(head) {
  if (head === null) {
    return null;
  }
  var left = null;
  while (head !== null) {
    var right = head.next;
    head.next = left;
    left = head;
    head = right;
  }
  return left;
}
```
