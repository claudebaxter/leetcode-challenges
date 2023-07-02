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


/*
(2-pointer in place implementation)
logic:
- init left pointer at start & right pointer at end of nums
- while left is less than right
- - if nums[left] is even, increment left by 1
- - if nums[right] is odd, decrement right by 1
- - if nums[left] is odd and nums[right] is even, swap these elements & increment left++ / decrement right--
- return nums array after loop ends

diagram:
left: 2
right: 1

               r
                  l
            0  1  2  3
let nums = [4, 2, 1, 3]

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        if (nums[left] % 2 === 0) left++;
        else if (!(nums[right] % 2 === 0)) right--;
        else {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++;
            right--;
        }
    }
    
    return nums;
};