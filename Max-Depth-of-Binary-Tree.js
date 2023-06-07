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
recursive solution
logic:
- Define max counter to track max depth starting at 0
- Define helper function maxDepth which takes node & currentDepth parameters
- -  if node is null, return (base case)
- -  compare max & currentDepth counters--assign highest value to max counter
- -  recursively call maxDepth on node.left & node.right, currentDepth + 1 (recursive cases)
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

recursive solution:
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

/*
iterative solution
logic:
- if root = null, return 0
- set max counter at 0 to track depth
- init queue variable assigned to root node [root] to start iteration
	(this ensures we start at root node and gradually explore children)
- while queue is longer than 0,
- - init size assigned to total number of nodes at current level of tree (queue length)
- - increment max counter +1
- - for loop through all nodes at current level 
- - init node variable assigned to current node being processed (first value of queue)
- - if there is a left node, add it to the queue
- - if there is a right node, add it to the queue
- (by looping through nodes at current level and pushing children to queue array, the loop prepares the queue for the next level of nodes to be processed)
- return max counter for max depth of tree
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

iterative solution:
 */
var maxDepth = function(root) {
    if (root === null) return 0;

    let max = 0;
    const queue = [root];

    while (queue.length > 0) {
        const size = queue.length;
        max++; //increment depth for each level

        for (let i = 0; i < size; i++) {
            const node = queue.shift();

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return max;
};