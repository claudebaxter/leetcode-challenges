/*
Copy List with Random Pointer
A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.

Example 1:

Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
Example 2:

Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
Example 3:

Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]
 
Constraints:

0 <= n <= 1000
-104 <= Node.val <= 104
Node.random is null or is pointing to some node in the linked list.
*/

/*
logic:
- if head is null, return null (base case)
- init current pointer starting at head node so we can insert new nodes after each original node
- while current is not null, traverse each node in head
- - init newNode to make a new node copying current.val
- - adjust newNode.next pointer to point to the next node
- - adjust current.next pointer to point at newNode
- - increment current forward to the next node
- move current pointer back to head node so we can set random pointers for the copy nodes
- while current is not null traverse head node by node
- - if current.random is not null, adjust current.next.random to current.random.next
- - increment current forward two nodes
- init newHead starting at head.next, newCurrent assigned to newHead & move current back to head to start separating the original and copied linked lists
- while current is not null, traverse head node by node
- - move current.next to point at current.next.next
- - if newCurrent.next is not null, adjust it to newCurrent.next.next
- - increment current forward one node
- - increment newCurrent forward one node
- return newHead for the new list

2 pointer approach
Time complexity: O(n) / linear (n = # nodes in head)
Space complexity: O(n) / linear (n = # nodes in newHead)

*/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;

    // Step 1: Insert new nodes after each original node
    let current = head;
    while (current) {
        let newNode = new Node(current.val);
        newNode.next = current.next;
        current.next = newNode;
        current = newNode.next;
    }

    // Step 2: Set random pointers for the copy nodes
    current = head;
    while (current) {
        if (current.random) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    }

    // Step 3: Separate the original and copied linked lists
    let newHead = head.next;
    let newCurrent = newHead;
    current = head;

    while (current) {
        current.next = current.next.next;
        if (newCurrent.next) {
            newCurrent.next = newCurrent.next.next;
        }
        current = current.next;
        newCurrent = newCurrent.next;
    }

    return newHead;
};
