/*
Squares of a Sorted Array

Solution
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
*/

/*
logic:
- init empty squaredNums array []
- - traverse nums array start to end
- - - square each value in nums and push to squaredNums array
- return the sorted squaredNums array
*/


//trivial method using the sort method:
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squaredNums = [];
    
    for (let i = 0; i < nums.length; i++) {
        squaredNums.push(nums[i] * nums[i]);
    }
    
    squaredNums.sort((a, b) => a - b);
    
    return squaredNums;
};

//O(n) approach that doesn't utilize sort method:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squaredNums = [];
    let left = 0;
    let right = nums.length - 1;
    let index = nums.length - 1;
    
    while (left <= right) {
        const squareLeft = nums[left] * nums[left];
        const squareRight = nums[right] * nums[right];
        
        if (squareLeft > squareRight) {
            squaredNums[index] = squareLeft;
            left++;
        } else {
            squaredNums[index] = squareRight;
            right--;
        }
        
        index--;
    }
    
    return squaredNums;
};

//O(n) approach that changes nums array in place:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i];
    }
    
    nums.sort((a, b) => a - b);
    
    return nums;
};