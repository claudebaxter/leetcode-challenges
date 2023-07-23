/*
Largest Number At Least Twice of Others
You are given an integer array nums where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

Example 1:

Input: nums = [3,6,1,0]
Output: 1
Explanation: 6 is the largest integer.
For every other number in the array x, 6 is at least twice as big as x.
The index of value 6 is 1, so we return 1.
Example 2:

Input: nums = [1,2,3,4]
Output: -1
Explanation: 4 is less than twice the value of 3, so we return -1.
 
Constraints:

2 <= nums.length <= 50
0 <= nums[i] <= 100
The largest element in nums is unique.
*/

/*
logic:
- init max variable and assign to the highest number in nums array (use Math.max(...nums) )
- init maxIndex variable and assign to index of max value (indexOf(max))
- traverse nums array from start to end with for loop
- - if the current value is not the max value, multiply it by 2--if it is larger than max, return -1
- if the loop ends without returning -1, return maxIndex

Iterative approach
Time complexity: O(n) / linear (n = # items in nums array)
Space complexity: O(1) / constant
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = Math.max(...nums);
    let maxIndex = nums.indexOf(max);
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != max) {
            if ((nums[i] * 2) > max) {
                return -1;
            }
        }
    }
    
    return maxIndex;
};