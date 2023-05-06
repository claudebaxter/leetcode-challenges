/*
1498. Number of Subsequences That Satisfy the Given Sum Condition
You are given an array of integers nums and an integer target.

Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. Since the answer may be too large, return it modulo 109 + 7.

Example 1:

Input: nums = [3,5,6,7], target = 9
Output: 4
Explanation: There are 4 subsequences that satisfy the condition.
[3] -> Min value + max value <= target (3 + 3 <= 9)
[3,5] -> (3 + 5 <= 9)
[3,5,6] -> (3 + 6 <= 9)
[3,6] -> (3 + 6 <= 9)
Example 2:

Input: nums = [3,3,6,8], target = 10
Output: 6
Explanation: There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).
[3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]
Example 3:

Input: nums = [2,3,3,4,6,7], target = 12
Output: 61
Explanation: There are 63 non-empty subsequences, two of them do not satisfy the condition ([6,7], [7]).
Number of valid subsequences (63 - 2 = 61).
 
Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 106
1 <= target <= 106
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const mod = 1e9 + 7;
    const sorted = nums.sort((a, b) => a - b);
    let count = 0;
    let left = 0;
    let right = nums.length - 1;

    const powerOfTwo = new Array(nums.length);
    powerOfTwo[0] = 1;

    for (let i = 1; i < nums.length; i++) {
        powerOfTwo[i] = (powerOfTwo[i - 1] * 2) % mod;
    }

    while (left <= right) {
        if (sorted[left] + sorted[right] <= target) {
            count = (count + powerOfTwo[right - left]) % mod;
            left++;
        } else {
            right--;
        }
    }

    return count;
};

/*
Intuition
Sort the nums array in ascending order to simplify the process of finding subsequences with the minimum and maximum elements.

Initialize the count variable to keep track of the number of valid subsequences.

Use two pointers (left and right) to iterate over the sorted array.

Start with left = 0 (pointing to the smallest element) and right = nums.length - 1 (pointing to the largest element).

Check if the sum of sorted[left] and sorted[right] is less than or equal to the target. If it is, it means all the subsequences between sorted[left] and sorted[right] are valid. Add the count of those subsequences to the count variable.

Move the left pointer to the right to consider the next element as the minimum element of the subsequence.

If the sum of sorted[left] and sorted[right] is greater than the target, move the right pointer to the left to consider a smaller maximum element.

Repeat steps 4-6 until the left and right pointers cross each other.
Return the count modulo mod as the result.

Approach
Imperative approach (function can mutate input and produce side effects)

Complexity
Time complexity:
O(n log n)

Space complexity:
O(n)
*/