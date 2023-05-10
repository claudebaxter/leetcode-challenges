/*
59. Spiral Matrix II
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

Example 1:

Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
Example 2:

Input: n = 1
Output: [[1]]
 
Constraints:

1 <= n <= 20
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n));
  }
  
  let num = 1;
  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;
  
  while (num <= n * n) {
    // Traverse top row from left to right
    for (let i = colStart; i <= colEnd; i++) {
      matrix[rowStart][i] = num++;
    }
    rowStart++;
    
    // Traverse right column from top to bottom
    for (let i = rowStart; i <= rowEnd; i++) {
      matrix[i][colEnd] = num++;
    }
    colEnd--;
    
    // Check if remaining rows or columns exist
    if (rowStart <= rowEnd && colStart <= colEnd) {
      // Traverse bottom row from right to left
      for (let i = colEnd; i >= colStart; i--) {
        matrix[rowEnd][i] = num++;
      }
      rowEnd--;
      
      // Traverse left column from bottom to top
      for (let i = rowEnd; i >= rowStart; i--) {
        matrix[i][colStart] = num++;
      }
      colStart++;
    }
  }
  
  return matrix;
};



/*
Time complexity O(n^2)
Space complexity O(n^2)

Imperative approach, mutates matrix variable to produce output, may create side effects.

Intuition behind the code is to iteratively fill the matrix by traversing the top, right, bottom, and left sides in a spiral order. The variables 'rowStart', 'rowEnd', 'colStart', and 'colEnd' keep track of the current boundaries of the matrix that need to be filled. The 'num' variable keeps track of the current number to be inserted, starting from 1 and incrementing with each iteration.
*/