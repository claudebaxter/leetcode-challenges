/*
Linked List Cycle II
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
Example 2:

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
Example 3:

Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
 
Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
 
Follow up: Can you solve it using O(1) (i.e. constant) memory?
*/

/*
approach: 2 pointer (fast & slow)
logic
- init fast and slow pointers
- - fast pointer moves 2 nodes per iteration
- - slow pointer moves 1 node per iteration
- init hasCycle set to false
- traverse list from start to end using next pointer
- - if fast pointer reaches slow pointer, list is cyclical (change hasCycle to true, break out of loop)
- if hasCycle is true, reset slow to head and traverse linked list until slow = fast
- - increment slow & fast one node at a time
- - when slow === fast, return slow
- else return null (if hasCycle stays false)

time complexity: O(n) / linear (n = # nodes in list)
space complexity: O(1) / constant
*/

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
var detectCycle = function(head) {
    if (head === null || head.next === null) return null;
    
    let fast = head;
    let slow = head;
    let hasCycle = false;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (fast === slow) {
            hasCycle = true;
            break;
	    }
    }
    
    if (hasCycle) {
   	slow = head;
	while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    }
    return null;
};