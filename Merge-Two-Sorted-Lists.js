/*
21. Merge Two Sorted Lists
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 
Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

/*
logic:
- init dummy node at -1 (new ListNode(-1);
- init current pointer starting at the dummy node
- while list1 & list2 are not null, traverse the lists and compare the values of the current nodes in list1 and list2
- - if list1.val is less than list2.val, adjust current.next to list1, and increment list1 forward one node
- - else, adjust current.next to list2, and adjust list2 forward one node
- - increment current pointer forward one node
- if there are remaining nodes in list1, increment current.next to list1
- else increment current.next to list2
- return dummy.next, which is the head of the merged linked list

Single pointer approach
Time complexity: O(n) / linear (n = # nodes in both lists)
Space complexity: O(1) / constant
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function mergeTwoLists(list1, list2) {
  let dummy = new ListNode(-1);
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next;
}
