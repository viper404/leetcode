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
