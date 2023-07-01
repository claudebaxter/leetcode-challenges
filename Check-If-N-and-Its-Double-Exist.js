/*
Check If N and Its Double Exist
Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 
Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
Example 2:

Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.
 
Constraints:

2 <= arr.length <= 500
-103 <= arr[i] <= 103
*/

/*
logic:
-traverse arr from start to finish with pointer i (outer loop)
- - traverse arr from 0 to finish with pointer j (inner loop)
- - - check if arr[i] == (arr[j] * 2)
- - - - if yes, return true
- - - - if no, increment j + 1 and start next iteration of inner loop
- - - - if all numbers are compared to arr[0] and none are true, increment i++ for next iteration of outer loop
- return false

diagram:

i = 0
j = 2
returns = true
              j  
        i
        0  1  2  3
arr = [10, 2, 5, 3]

time complexity: O(n^2) n = arr.length / quadratic
space complexity: O(1) / constant (returns true or false)
*/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == (arr[j] * 2) &&
               i !== j) {
                return true;
            }
        }
    }
    
    return false;
};