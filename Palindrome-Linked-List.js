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
*/

/*
logic:
- check if head or head.next is null, if so return true
- init empty nodes array
- init current pointer starting at head
- while current is not null, traverse head start to end
- - push each node value into the nodes array
- - increment current forward one node at a time
- init left and right pointers for beginning and end of nodes array
- while left is less than right, traverse nodes array
- - if nodes[left] is not equal to nodes[right] return false
- - otherwise increment left +1 and decrement right -1
- return true if loop runs all the way without returning false

iterative approach
Time complexity: O(n) / linear (n = # nodes in head)
Space complexity: O(1) / linear (n = # items in nodes array)
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null || head.next === null) {
        return true;
    }
    
    let nodes = [];
    let current = head;
    
    while (current) {
        nodes.push(current.val);
        current = current.next;
    }
    
    let left = 0;
    let right = nodes.length - 1;
    
    while (left < right) {
        if (nodes[left] !== nodes[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
};


//alternative solution:

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
