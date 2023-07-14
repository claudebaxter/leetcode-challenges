/*
Remove Nth Node From End of List

Solution
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 
Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 
Follow up: Could you do this in one pass?
*/

/*
logic:
- initialize fast & slow pointers
- move fast pointer to start at the nth node, while slow pointer starts from the first
- - if fast pointer is null, return head.next (base case)
- traverse list one node at a time until fast pointer reaches the end
- - pointer one starts at the beginning of the list
- - pointer two starts n nodes ahead of pointer one
- remove the nth node from the end by adjusting the slow.next pointer to slow.next.next
- return the new head with the nth node removed

Approach: fast & slow 2 pointer approach
Time Complexity: O(n) / linear (n = nodes in list)
Space Complexity: O(1) / constant
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slow = head;
    let fast = head;
    
    for (let i = 0; i <= n; i++) {
        if (fast === null) {
            return head.next; 
        }
        fast = fast.next;
    }
    
    while (fast != null) {        
        slow = slow.next;
        fast = fast.next;
    }
    
    slow.next = slow.next.next;
    
    return head;
};