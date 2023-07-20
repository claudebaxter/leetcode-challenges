/*
2. Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

/*
logic:
- init newNode as new linked list with dummy node value of 0
- init head and set it to newNode (will use to build resulting linked list)
- init carry assigned to 0 (will track any carry over from addition of previous digits)
- while 11 and 12 are not null, traverse each list until both are null
- - on each iteration, obtain values a, b from corresponding nodes of l1 and l2
- - init sum assigned to a + b + carry
- - adjust carry to store the carry-over (Math.floor(sum / 10))
- - append a new node to head.next with the value of sum modulo 10 to get the single digit
- - move l1, l2 and head to their next nodes (if they exist)
- after loop ends, if there is still a remaining carry (if carry > 0), append a new node with the value of carry to head.next
- return newNode.next, which is the resulting linked list.

Iterative approach traverses two linked lists and performs addition digit by digit. The result is stored in a new linked list.

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let newNode = new ListNode(0);
    let head = newNode;
    let carry = 0;

    while (l1 || l2) {
        let a = l1 && l1.val;
        let b = l2 && l2.val;
        let sum = a + b + carry;

        //test with console.log to understand output from each iteration
        console.log(a, b, sum);

        carry = Math.floor(sum / 10);
        head.next = new ListNode(sum % 10);

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;

        head = head.next;
    }
    if (carry > 0) head.next = new ListNode(carry);
    return newNode.next;
};