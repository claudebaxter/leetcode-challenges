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


//alternative implementation:

/*
Approach: 4-pointer approach

logic:
Example 
                               

Input: matrix = [[1,2,3,4],

		 i      j
		 [5,6,7,8],

                 i          j
		 [9,10,11,12]]

Output: [1,2,3,4,8,12,11,10,9,5,6,7]


output: [1, 2, 3, 4, 8 ]

- init empty output array to store numbers
- init top pointer starting at 0
- init bottom pointer starting at matrix.length - 1 (last item in matrix)
- init left pointer starting at 0
- init right starting at matrix[0].length - 1 (last item of first nested array)
- while top & bottom pointers / left & right pointers have not crossed, traverse matrix
- - traverse top row from left to right one item at a time (i++)
- - - push each value from top row to output array
- - increment top++
- - traverse right column top to bottom one item at a time (i++)
- - - push each value from right column to output array
- - decrement right--
- - if top <= bottom, traverse bottom row from right to left (i--)
- - -  push each item from bottom row to output array
- - decrement bottom--
- - if left is less than or equal to right, traverse left column from bottom to top (i--)
- - - push each item in left column to output array
- - increment left++
- after loop finishes, returning output array

Time complexity: O(n x m) / linear (n = # of rows in matrix, and m = # of columns in matrix)
Space complexity: O(n) / linear (n = # of items in output array)
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let output = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    
    while (top <= bottom && left <= right) {
        //traverse top row
        for (let i = left; i <= right; i++) {
            output.push(matrix[top][i]);
        }
        
        top++;
        //traverse right column
        for (let i = top; i <= bottom; i++) {
            output.push(matrix[i][right]);
        }
        
        right--;
        
        //trabverse bottom row
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                output.push(matrix[bottom][i]);
            }
            
            bottom--; 
        }
        
        //traverse left column
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                output.push(matrix[i][left]);
            }
            left++;
        };
    };
    
    return output;
};