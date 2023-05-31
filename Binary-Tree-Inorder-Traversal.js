/*
94. Binary Tree Inorder Traversal
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:

Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
 
Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 
Follow up: Recursive solution is trivial, could you do it iteratively?

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
 * @return {number[]}
 */

 /**
 logic:

 Example case: root = [1, 2, 3, null, null, 4, 5]
 example output: [2, 1, 4, 3, 5]

 example2 case: root = [2, 1, 3, 4, 5, null, 6]
 example2 output: [4, 1, 5, 2, 3, 6]

 In an inorder traversal, the left subtree is visited first, then the root node, and ;ast the right subtree:
    Visit the left subtree of node 1 first.
    Visit the root node (1).
    Visit the root node of node 1 (1).
    Visit the right subtree of node 1 (node 3).
    Visit the left subtree of node 3 (node 4).
    Visit the root node of node 3 (3).
    Visit the right subtree of node 3 (node 5).


Diagrams:

Diagram: root = [1, 2, 3, null, null, 4, 5]
                    1
                  /   \
         Start: 2       3
                      /    \
                    4       5  :End

We would start at the left subtree root node 1: [2]
Then root of node 1: [2, 1]
Left subtree of node3 (4): [2, 1, 4]
Root of node3 (3): [2, 1, 4, 3]
Right subtree of node3(5): [2, 1, 4, 3, 5]

Diagram2: root = [2, 1, 3, 4, 5, null, 6]

                2
             /     \
           1         3
         /   \        \
       4       5        6

Start at left subtree root node 1 (4): [4]
Root of node1 (1): [4, 1]
right subtree of node1 (5): [4, 1, 5]
root of node2 (2): [4, 1, 5, 2]
no left subtree of node3: [4, 1, 5, 2] 
root of node3 (3) [4, 1, 5, 2, 3]
right subtree of node3 (6): [4, 1, 5, 2, 3, 6]

Diagram 3: root = [1, null, 2, 3]

                1
                  \
                   2
                  /
                3

        output: [1,3,2]

Pseudocode:
    init output = [];
    function recursiveHelp(node) 
        base case:
            if node is null, return
        recursiveHelp(this.left)
        output.push(left)
        recursiveHelp(this.right)
        output.push(right)
        recursiveHelp(this.val)
        output.push(node)
    return output;

  */

//recursive solution:
var inorderTraversal = function(root) {
    let output = [];

    function nodeInorder(node) {
        if (node === null) { return; }

        nodeInorder(node.left);
        output.push(node.val);
        nodeInorder(node.right);
    }

    nodeInorder(root);

    return output;
};

