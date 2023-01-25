/*
1337. The K Weakest Rows in a Matrix
You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

A row i is weaker than a row j if one of the following is true:

The number of soldiers in row i is less than the number of soldiers in row j.
Both rows have the same number of soldiers and i < j.
Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

Example 1:

Input: mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
Output: [2,0,3]
Explanation: 
The number of soldiers in each row is: 
- Row 0: 2 
- Row 1: 4 
- Row 2: 1 
- Row 3: 2 
- Row 4: 5 
The rows ordered from weakest to strongest are [2,0,3,1,4].
Example 2:

Input: mat = 
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]], 
k = 2
Output: [0,2]
Explanation: 
The number of soldiers in each row is: 
- Row 0: 1 
- Row 1: 4 
- Row 2: 1 
- Row 3: 1 
The rows ordered from weakest to strongest are [0,2,3,1].

Constraints:

m == mat.length
n == mat[i].length
2 <= n, m <= 100
1 <= k <= m
matrix[i][j] is either 0 or 1.

SOLUTION:
*/


/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = (mat, k) => {
    const answer = [];
    // init answer variable and assing to empty array
    for (let i = 0; i < mat.length; ++i) {
        let current = 0;
        //loop through outter array, initiate current variable assigned to value 0
        //current will be used to store the strength (number of 1s) per row / nested array
        //++i returns the value of i after incrementing (i++ returns value of i before incrementing)
        for (let j = 0; j < mat[i].length; ++j, ++current) { 
            if (mat[i][j] === 0) break;
            //loop through inner array, ++j returns value of j after incrementing
            //++current returns the strength (number of 1s) in the nested array / row after incrementing
            //if outter and inner index === value of 0, break loop
        }
        answer.push([current, i]);
        //push current row strength and outter array index (row number) to answer array
        //each iteration through loop will add another nested array to answer array
        //e.g., [[row0 strength, 0]], [[row0 strength, 0], [row1 strength, 1]], etc...
    }

    console.log(answer);
    console.log(answer.map(item => item[1]));

    return answer
        .sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
        //sort answer array to list weakest rows to strongest rows using ternary operation
        .slice(0, k)
        //slice method returns indexes 0 - k of sorted answer array
        .map(item => item[1])
        //map method returns sorted & sliced answer array row numbers / indexes only (2nd item in each array)
};