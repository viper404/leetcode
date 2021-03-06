// 206. Reverse Linked List
// Reverse a singly linked list.
// Hint:
// A linked list can be reversed either iteratively or recursively. Could you implement both?
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
