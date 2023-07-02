/*
Sort Array By Parity
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
Example 2:

Input: nums = [0]
Output: [0]
 
Constraints:

1 <= nums.length <= 5000
0 <= nums[i] <= 5000
*/

/*
(not in place implementation) logic:
- init two empty arrays: evens and odds
- traverse nums from start to end
- - if nums[i] is even, add it to evens
- - if nums[i] is odd, add it to odds
- init output to equal evens concatenated with odds
- return output

diagram:

evens: [2, 4]
odds: [3, 1]
output: [2, 4, 3, 1]

                i
       0  1  2  3
nums: [3, 1, 2, 4]


*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let evens = [];
    let odds = [];
    
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) evens.push(nums[i]);
        else odds.push(nums[i]);
    }
    
    let output = [...evens, ...odds];
    return output;
};