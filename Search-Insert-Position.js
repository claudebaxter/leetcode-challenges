/*
35. Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 
Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target);
    } else {
        nums.push(target);
        nums.sort(function(a, b) {
            return a - b; //Compare function to sort in ascending order
        });
        console.log(nums);
        return nums.indexOf(target);
    }
};

//functional immutable solution:

var searchInsert = function(nums, target) {
    var numsCopy = nums.slice(); // Create a copy of the input array

    if (numsCopy.includes(target)) {
        return numsCopy.indexOf(target);
    } else {
        numsCopy.push(target);
        numsCopy.sort(function(a, b) {
            return a - b; // Compare function to sort in ascending order
        });
        console.log(numsCopy);
        return numsCopy.indexOf(target);
    }
};


/*

*/