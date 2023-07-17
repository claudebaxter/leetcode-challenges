/*
Remove Linked List Elements

Solution
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Example 1:

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []
 
Constraints:

The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= val <= 50
*/

/*
logic:
- if head is not null, and head.val === val, adjust head to head.next
- if head is null, return null
- init fast and slow pointers starting at the head
- traverse linked list start to end so that slow pointer is always one node behind fast pointer
- - if fast pointers Node.val = val input, remove it from the list (adjust slow.next to slow.next.net);
- return head

Time complexity: O(n) / linear (n = nodes in head)
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while (head !== null && head.val === val) {
        head = head.next;
    }
    if (head === null) {
        return null;
    }
    
    let slow = head;
    let fast = head.next;
    
    while (fast && slow) {
        if (fast.val === val) {
            slow.next = fast.next;
        } else {
            slow = slow.next;
        }
        fast = fast.next;
    }
    
    return head;
};

/*
alternative solution using dummy node
logic:
- if head is not null and head.val == val, adjust head to head.next
- init dummy pointer as a new dummy node before the head
- init fast pointer pointing at head and slow pointer starting at dummy node
- traverse linked list until fast pointer is null
- - if fast.val == val, adjust slow.next to skip next node by pointing it to fast.next and increment fast to the next node with fast.next
- - else adjust slow forward one node to fast, and move fast forward to fast.next
- return head

2-pointer dummy node approach
time complexity: O(n)
space complexity: O(1)
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while(head!=null && head.val==val)
    head=head.next;
    
    let dummy=new ListNode(0,head);
    let fast=head;
    let slow=dummy;
     while(fast!=null){
          if(fast.val==val){
              slow.next=fast.next;
              fast=fast.next;
          }else{
              slow=fast;
              fast=fast.next;
          }
        }
    return head;
};