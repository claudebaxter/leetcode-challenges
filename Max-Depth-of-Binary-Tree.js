/*
104. Maximum Depth of Binary Tree
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
 
Constraints:

The number of nodes in the tree is in the range [0, 10^4].
-100 <= Node.val <= 100
*/

/*
logic:
- Define max counter to track max depth starting at 0
- Define helper function maxDepth which takes node & currentDepth parameters
- -  if node is null, return
- -  compare max & currentDepth counters--assign highest value to max counter
- -  recursively call maxDepth on node.left & node.right, currentDepth + 1
- call maxDepth function on root and currentDepth = 1
- return max counter value
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
var maxDepth = function(root) {
    let max = 0;
    function maxDepth(node, currentDepth) {
        if (node === null) return;

        max = Math.max(max, currentDepth);

        maxDepth(node.left, currentDepth + 1);
        maxDepth(node.right, currentDepth + 1);
    }
    maxDepth(root, 1);

    return max;
};