/*
Max Consecutive Ones

Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 
Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
*/

/*
logic
- init a current and max counter variable set to 0
- travers nums array start to finish
- - when nums[i] = 1, use current to track the current series of 1s
- - when nums[i] != 1 & current is greater than max, set max = current and reset current to 0
- - if nums[i] != 1 & current is smaller than max, reset current to 0
- return the max counter value
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let current = 0;
    let max = 0;
    
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] === 1) {
            current += nums[i];
        } else if (current > max) {
            max = current;
            current = 0;
        } else {
            current = 0;
        }
    }
    
    return max;
};