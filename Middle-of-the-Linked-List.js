/*
876. Middle of the Linked List
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 
Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100

SOLUTION:
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
 * @return {ListNode}
 */
var middleNode = function(head) {
    //initialize 2 pointers, both pointing to the head
    let point1 = head;
    let point2 = head;
    //Per iteration, moves point1 forward 1 node and point2 forward 2 nodes
    while (point2 != null && point2.next != null) {
        point1 = point1.next;
        point2 = point2.next.next;
    }
    //when p2 reaches the last node, p1 will be at the center of the list:
    return point1;
};