// 2. Add Two Numbers
// You are given two linked lists representing two non-negative numbers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
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
