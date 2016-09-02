## 206.ReverseLinkedList
> ## solution by [braydenCN](https://discuss.leetcode.com/topic/13268/in-place-iterative-and-recursive-java-solution)

```javascript
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
