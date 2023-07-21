/*
Rotate List
Given the head of a linked list, rotate the list to the right by k places.

Example 1:

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
Example 2:

Input: head = [0,1,2], k = 4
Output: [2,0,1]

Constraints:

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109
*/

/*
Logic:
- If the head is null, return null, as there's nothing to rotate.

- Calculate the length of the linked list:
  - Initialize a length counter starting at 1 (to account for the head node).
  - Initialize a tail pointer starting at the head node.
  - While the tail's next pointer is not null, move the tail forward one node at a time and increment the length by 1 for each iteration. This gives us the total number of nodes in the list.

- Find the effective rotation amount using the modulo operator:
  - Initialize a kPrimed counter assigned to k % length, where length is the number of nodes in the list.
  - If kPrimed is 0, it means the list remains unchanged after rotation, so return the original head.

- Traverse the list to find the new tail and the new head after rotation:
  - Calculate the index of the new tail node by subtracting kPrimed from the length - 1.
  - Initialize a newTail pointer at the head node.
  - While the newTailIndex is greater than 0, move the newTail forward one node and decrement the newTailIndex by 1 for each iteration. This will position the newTail at the node that will become the new tail after rotation.

- Update the pointers to rotate the list:
  - Initialize a newHead pointer at newTail.next. This becomes the new head of the rotated list.
  - Set newTail.next to null to separate the rotated list from the original list.
  - Adjust the tail's next pointer to point back to the original head, creating a circular connection.

- Return the newHead, which is the head of the rotated linked list.

2-pointer approach
Time complexity: O(n) / linear (n = number of nodes in head)
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return null;

  // Calculate the length of the linked list
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // Find the remainder k' = k % length
  let kPrimed = k % length;

  // If k' is 0, the list remains unchanged, so return the original head
  if (kPrimed === 0) return head;

  // Traverse the list to find the new tail and new head after rotation
  let newTailIndex = length - kPrimed - 1;
  let newTail = head;
  while (newTailIndex > 0) {
    newTail = newTail.next;
    newTailIndex--;
  }

  // Update pointers to rotate the list
  let newHead = newTail.next;
  newTail.next = null;
  tail.next = head;

  return newHead;
};