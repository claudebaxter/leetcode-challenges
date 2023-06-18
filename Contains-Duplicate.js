/*
217. Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/*
logic:
- initiate output as boolean flag set to false by default
- iterate through nums array with two pointers
- let i = 0, i < nums.length, i++
- - let j = i + 1, j < nums.length, j++
- - if nums[i] == nums[j] set output to true and break loop
- return output
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let output = false;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                output = true;
                break;
            }
        }
    }

    return output;
};

//hasmap solution:

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hash = {};

    for (const num of nums) {
        hash[num] = (hash[num] || 0) + 1;
    }

    for (const key in hash) {
        if (hash[key] !== 1) return true
    }

    return false
};