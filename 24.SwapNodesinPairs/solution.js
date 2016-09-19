// 24. Swap Nodes in Pairs
// Given a linked list, swap every two adjacent nodes and return its head.
// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.
// Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
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
