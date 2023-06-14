/*
530. Minimum Absolute Difference in BST
Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

Example 1:

Input: root = [4,2,6,1,3]
Output: 1
Example 2:

Input: root = [1,0,48,null,null,12,49]
Output: 1
 
Constraints:

The number of nodes in the tree is in the range [2, 104].
0 <= Node.val <= 105
*/

 /**
 recursive logic:
- Initialize minDiff variable to Infinity. This variable will keep track of the minimum difference found so far.
- Initialize prevVal variable to null. This variable will store the value of the previously visited node.
- Define a recursive function traverse that takes a node as input.
- - If the node is null, return.
- - Recursively call traverse on the left subtree of the current node.
- - If prevVal is not null:
- - - Calculate the difference between the current node's value (node.val) and the previous value (prevVal).
- - - Update minDiff with the minimum of the current minDiff and the calculated difference.
- - Update prevVal with the current node's value.
- - Recursively call traverse on the right subtree of the current node.
- Call the traverse function on the root node to start the traversal.
- Return the final minDiff value.

iterative logic:
- Initialize minDiff variable with Infinity to track the minimum difference.
- Initialize prevVal variable with null to store the previous node's value.
- Initialize an empty stack stack to keep track of the nodes to be visited.
- Set curr to the root of the BST.
- Enter a while loop that continues until curr is null and the stack is empty.
- Inside the while loop, enter another while loop to traverse to the leftmost node of the current subtree. Push each node encountered onto the stack.
- Once the leftmost node is reached (when curr is null), pop the top node from the stack and assign it to curr.
- Check if prevVal is not null. If so, calculate the difference between the current node's value (curr.val) and the previous node's value (prevVal), and update minDiff if the calculated difference is smaller.
- Update prevVal with the current node's value.
- Move to the right subtree by assigning curr as curr.right.
- Repeat steps 5-10 until all nodes are traversed.
- Return the final value of minDiff, which represents the minimum absolute difference between any two different node values in the BST.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//recursive solution:
var getMinimumDifference = function(root) {
    var getMinimumDifference = function(root) {
    let minDiff = Infinity;
    let prevVal = null;

    const traverse = (node) => {
        if (node === null) {
            return;
        }

        traverse(node.left);

        if (prevVal !== null) {
            minDiff = Math.min(minDiff, node.val - prevVal);
        }
        prevVal = node.val;

        traverse(node.right);
    };

    traverse(root);

    return minDiff;
};

//iterative solution:
var getMinimumDifference = function(root) {
    let minDiff = Infinity;
    let prevVal = null;

    let stack = [];
    let curr = root;

    while (curr !== null || stack.length > 0) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }

        curr = stack.pop();

        if (prevVal !== null) {
            minDiff = Math.min(minDiff, curr.val - prevVal);
        }
        prevVal = curr.val;

        curr = curr.right
    }

    return minDiff;
};