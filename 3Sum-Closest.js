/&
16. 3Sum Closest
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 
Constraints:

3 <= nums.length <= 500
-1000 <= nums[i] <= 1000
-104 <= target <= 104
*/

/*
logic:
Sort the Input Array: The first step is to sort the input array nums. Sorting is essential for the two-pointer approach as it allows us to efficiently move the pointers towards each other.

Two-Pointer Approach: The outer loop iterates through the array using the index i. The inner while loop employs the two-pointer approach, with left starting from i + 1 and right starting from the end of the array (nums.length - 1). This allows us to explore all possible combinations of three elements in the array.

Calculate the Sum: In each iteration of the inner loop, the sum of the three elements at indices i, left, and right is calculated: sum = nums[i] + nums[left] + nums[right].

Update closestSum: The code compares the absolute difference between sum and target with the absolute difference between the current closestSum and target. If the new sum is closer to the target than the current closestSum, closestSum is updated.

Pointer Movement: Depending on whether sum is less than or greater than target, the left or right pointer is moved. If sum is less than target, it means we need a larger value, so we move the left pointer to the right. If sum is greater than target, it means we need a smaller value, so we move the right pointer to the left.

Return closestSum: After all iterations, the function returns the closestSum, which holds the sum of the three elements that is closest to the target.

Two-pointer approach.
Time complexity: O(n^2) / linear
Space complexity: O(1) / constant
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let sums = [];
    let differences = [];

    if (target <= 0 || nums.length < target) return sums;

    for (let i = 0; i <= nums.length - target; i++) {
        let sum = 0;
        for (let j = i; j < i + target; j++) {
            sum += nums[j]
        }
        sums.push(sum);
    }

    for (let i = 0; i < sums.length; i++) {
        differences.push(target - sums[i]);
    }

    console.log(differences);

    let nonNegativeDifferences = differences.filter(diff => diff >= 0);

    let output = nonNegativeDifferences.sort((a, b) => a - b);
    console.log(output, nonNegativeDifferences)
    return output[0];
};