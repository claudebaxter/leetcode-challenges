/*
Odd Even Linked List

Solution
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

Example 1:

Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
Example 2:

Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
 
Constraints:

The number of nodes in the linked list is in the range [0, 104].
-106 <= Node.val <= 106
*/

/*
logic:
- check if head is null, then return null
- init odd listnode pointed at head
- init even listnode pointed at head.next
- init evenHead listnode pointed at even
- while even & even.next are not null, traverse head
- - adjust odd.next to even.next
- - adjust odd to odd.next
- - adjust even.next to odd.next
- - adjust even to even.next
- adjust odd.next to evenHead to connect even list to end of odds
- return head

3-pointer approach
Time complexity: O(n) / linear (n  = # of nodes in head)
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
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null) return null;
    
    let odd = ListNode(0, head);
    let even = ListNode(0, head);
    let evenHead = even;
    
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    
    odd.next = evenHead;
    return head;
};