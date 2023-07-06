/*
Find All Numbers Disappeared in an Array
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]

Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
 

Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
*/

/*
logic:
- init counter variable starting at 1 
- init max variable set to highest value in nums array
- init empty output array
- traverse nums array from start to end until i = max
- - if nums array does not contain k, push k to output array
- - increment k + 1
- return output array

Iterative / Functional approach using a counter variable

Time Complexity: O(n) / Linear n = nums.length
Space Complexity: O(n) / Linear n = output.length
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let output = [];
    let k = 1;
    let n = nums.length;
    
    for (let i = 0; i < n; i++) {
        if (!nums.includes(k)) output.push(k);
        k++;
    }
    
    return output;
};