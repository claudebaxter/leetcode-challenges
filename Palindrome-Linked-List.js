/*
234. Palindrome Linked List

Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise. 

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 

Follow up: Could you do it in O(n) time and O(1) space?

SOLUTION:
*/

/**
 * Definition for singly-linked list.
 * Example singly linked list to visualize:
 * const list = {
    head: {
        value: 6
        next: {
            value: 10                                             
            next: {
                value: 12
                next: {
                    value: 3
                    next: null	
                    }
                }
            }
        }
    }
};

learn more: https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/

 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    let list = head;
    const scroller = node => {
        if (node === null) {
            return true;
        }
        const prevList = scroller(node.next);
        const currList = list.val === node.val;
        list = list.next;
        return prevList && currList;
    }
    return scroller(head);
};
