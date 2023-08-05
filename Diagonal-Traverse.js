/*
Diagonal Traverse

Solution
Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

Example 1:

Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]
Example 2:

Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]
 
Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
-105 <= mat[i][j] <= 105
*/


/*
logic:
Function Declaration: The function findDiagonalOrder takes a 2D matrix mat as input and returns a 1D array.

Base Case Check: The first thing the function does is check if the matrix mat is null or empty. If it is, the function immediately returns an empty array (0 in this case).

Matrix Dimensions: The function determines the dimensions of the input matrix:

N is the number of rows in the matrix.
M is the number of columns in the matrix.
Initialization: Initialize an empty array result to store the diagonal elements in the desired order.

Loop for Diagonals: The loop for (let d = 0; d < N + M - 1; d++) iterates over all possible diagonals. The total number of diagonals in an N x M matrix is N + M - 1.

Intermediate Array and Indices Calculation:

Inside the loop, an empty array intermediate is created for each diagonal.
Two variables r and c are used to determine the starting point of the current diagonal. These indices represent the current cell in the matrix being considered for the diagonal.
Diagonal Traversal:

A while loop traverses the diagonal by incrementing r and decrementing c until r reaches the last row or c becomes negative.
During traversal, the elements of the diagonal are pushed into the intermediate array.
Reverse for Even Diagonals:

After the diagonal traversal, there's a check if the current diagonal number d is even (d % 2 == 0). If it is, the intermediate array is reversed using the reverse() method. This is done to ensure correct order of elements for even diagonals.
Populate Result Array:

Finally, a loop iterates through the intermediate array and assigns its elements to the result array. The k variable is used to keep track of the index in the result array.
Return Result: The function returns the result array containing all elements in diagonal order.

Time Complexity: The time complexity of this solution is O(N * M), where N is the number of rows and M is the number of columns in the matrix.

Space Complexity: The space complexity is also O(N * M) due to the result and intermediate arrays used to store the diagonal elements.

*/

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    if (mat == null || mat.length == 0) return 0;

    let N = mat.length;
    let M = mat[0].length

    let result = new Array(N * M);
    let k = 0;
    let intermediate = [];

    for (let d = 0; d < N + M - 1; d++) {
        intermediate = [];

        let r = d < M ? 0 : d - M + 1;
        let c = d < M ? d : M - 1;

        while (r < N && c > -1) {
            intermediate.push(mat[r][c]);
            ++r;
            --c;
        }

        if (d % 2 == 0) {
            intermediate.reverse();
        }

        for (let  i = 0; i < intermediate.length; i++) {
            result[k++] = intermediate[i]
        }
    }
    return result;
};