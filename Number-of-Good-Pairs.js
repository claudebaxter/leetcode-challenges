/*
1512. Number of Good Pairs
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
*/

/*
logic:
- initialize empty output array []
- iterate through nums array with two pointers
- let i = 0; i < nums.length; i++ and let j = i + 1
- in inner loop, check if nums[i] == nums[j] && if i < j
- - if check passes, push [i, j] subarray to output array 
- return output.length for answer
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let output = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && i < j) {
                output.push([i, j])
            }
        }
    }

    return output.length;
};

/*
logic:
- initialize counter set to 0
- iterate through nums array with two pointers
- let i = 0, i < nums.length, i++
- - let j = i + 1, j < nums.length, j++
- - - if the values at nums[i] and nums[j] match, increment counter +1
- return counter value after iteration ends
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && i < j) {
                count++
            }
        }
    }

    return count;
};