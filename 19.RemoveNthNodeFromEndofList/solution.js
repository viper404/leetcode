// 19. Remove Nth Node From End of List
// Given a linked list, remove the nth node from the end of list and return its head.
// For example,
// Given linked list: 1->2->3->4->5, and n = 2.
// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
// Given n will always be valid.
// Try to do this in one pass.
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
