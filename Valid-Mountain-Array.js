/*
Valid Mountain Array
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 
Example 1:

Input: arr = [2,1]
Output: false
Example 2:

Input: arr = [3,5,5]
Output: false
Example 3:

Input: arr = [0,3,2,1]
Output: true

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 104
*/

/*
logic:
- init integer n at arr.length
- init i pointer at 0
- traverse arr from start to peak with while loop
- - while i + 1 < n AND arr[i] < arr[i + 1], increment i++
- check to make sure peak isn't first or last value in array, if so return false
- traverse arr from peak to end
- - while i + 1 < n AND arr[i] > arr[i + 1]), increment i++
- return true if we're at the end of arr after loops end

time complexity: O(n) n = arr.length / linear
space complexity: O(1) / constant
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let n = arr.length;
    let i = 0;
    //walk up
    while (i + 1 < n && arr[i] < arr[i + 1]) {
        i++;
    };
    //peak can't be first or last
    if (i == 0 || i == n - 1) return false;
    //walk down
    while (i + 1 < n && arr[i] > arr[i + 1]) {
        i++;
    }
    //return true if at end of arr
    return i == n - 1;
};