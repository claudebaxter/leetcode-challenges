/*
Duplicate Zeros
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

Example 1:

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Example 2:

Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 9
*/

/*
logic:
- traverse arr start to end
- - check if if arr[i] = 0
- - - if yes, insert a 0 to the right of current index
- - - remove the last number from the end of the array
- - - increment i++ to skip over inserted 0 (avoiding infinite loop)
- return arr
*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.splice(arr.length - 1, 1);
            i++;
        }
    }
    return arr;
};