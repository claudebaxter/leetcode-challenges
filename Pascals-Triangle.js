/*
Pascal's Triangle
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 
Constraints:

1 <= numRows <= 30
*/

/*
Approach: 2-pointer approach
logic
- if numRows === 1, return [[1]] (base / edge case)
- init output array as new Array with length of numRows
- traverse output array from start to end
- - insert an empty array at each index with a length of the current index + 1
- adjust output[0] to [1], adjust output[1] to [[1], [1]]
- traverse output array from index 2 to the end
- - init nestedArr to equal output[i]
- - traverse nestedArr from start to end
- - - if j pointer is on first or last index of nestedArr, set this value to 1 
(1 should be the beginning/end value of each nestedArr)
- - - else, adjust nestedArr[j] to equal the sum of output[i - 1][j - 1] + output[i - 1][j] 
(this is the necessary operation to calculate the value of the nested array index based off the previous nested arrays values as instructed)
- return completed output array

Time complexity: O(n) / linear (n = number of rows)
Spae complexity: O(n) / linear (n = number of rows)
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 1) return [[1]];
    
    let output = new Array(numRows); 
    for (let i = 0; i < numRows; i++) {
        output[i] = new Array(i + 1);
    }
    
    output[0] = [1]
    output[1] = [1, 1]
    
    for (let i = 2; i < output.length; i++) {
        let nestedArr = output[i];
        for (let j = 0; j < nestedArr.length; j++) {
            if (j === 0 || j === nestedArr.length - 1) {
                nestedArr[j] = 1
            } else {
                nestedArr[j] = output[i - 1][j - 1] + output[i - 1][j]
            }
        }
    }
    
    return output;
};