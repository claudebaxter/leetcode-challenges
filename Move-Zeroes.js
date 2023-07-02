/*
Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 
Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 
Follow up: Could you minimize the total number of operations done?
*/

/*
Logic:
- Initialize nonZeroIndex to 0 to keep track of the index where the next non-zero element should be placed.
- Traverse the nums array from start to end.
  - If the current element at index i is non-zero:
    - Swap the non-zero element with the element at index nonZeroIndex.
    - Increment nonZeroIndex by 1 to move to the next position for the next non-zero element.
- After the loop ends, all non-zero elements will be moved to the left side of the array, and the remaining elements at indices nonZeroIndex and beyond should be set to zero.
- Set the remaining elements from nonZeroIndex to the end of the array to zero.
- Return the modified nums array.

Example:
Input: nums = [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]

Diagram:        
Initial array: [0, 1, 0, 3, 12]
nonZeroIndex: 0
                    
After swapping: [1, 0, 0, 3, 12]
nonZeroIndex: 1

After swapping: [1, 3, 0, 0, 12]
nonZeroIndex: 2

After swapping: [1, 3, 12, 0, 0]
nonZeroIndex: 3

All non-zero elements are moved to the left side, and remaining elements are set to zero.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap non-zero element with the element at nonZeroIndex
            let temp = nums[i];
            nums[i] = nums[nonZeroIndex];
            nums[nonZeroIndex] = temp;
            
            // Increment nonZeroIndex
            nonZeroIndex++;
        }
    }
    
    // Set remaining elements to zero
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
    
    return nums;
};