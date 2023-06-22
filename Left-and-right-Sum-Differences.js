/*
2574. Left and Right Sum Differences
Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.
Where:

leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
Return the array answer.

Example 1:

Input: nums = [10,4,8,3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
Example 2:

Input: nums = [1]
Output: [0]
Explanation: The array leftSum is [0] and the array rightSum is [0].
The array answer is [|0 - 0|] = [0].
 
Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 /**
 logic: 
 - initiate empty output array []
 - init a leftSum & rightSum variables to track sum to left and right of i
 - leftSum will start at 0 and rightSum will be the sum of all values in array
 - traverse nums array from start to finish
 - - subtract nums[i] from the value of rightSum
 - - push leftSum + rightSum value to output array
 - - ^(use Math.abs for all positive values in output array)
 - - add nums[i] to the value of leftSum
 - return output array
 */
var leftRightDifference = function(nums) {
    let output = [];
    let leftSum = 0;
    let rightSum = nums.reduce((acc, num) => acc + num, 0);

    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i]; // Subtract the current number from rightSum
        output.push(Math.abs(leftSum - rightSum)); // Calculate the difference between leftSum and rightSum
        leftSum += nums[i]; // Add the current number to leftSum
    }

    return output;
};