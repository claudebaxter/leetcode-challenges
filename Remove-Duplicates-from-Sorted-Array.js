/*
26. Remove Duplicates from Sorted Array
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 
Constraints:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    /**
    logic:
    initialize k counter variable to return 
    let k = 0 (counter variable to return # of unique values)
    let uniqueValues = [] (empty array to keep track of unique values)
    iterate through nums from start to end
    for i = 0; i < nums.length; i++
        if not included in uniqueValues, add to array
        and increase k counter +1
        if !uniqueValues.includes(arr[i])
            uniqueValues.push(arr[i])
            k++
    replace values in nums with uniqueValues (in place)
    for i = 0; i < k; i++
        nums[i] = uniqueValues[i]
    return k;
     */

     let k = 0;
     let uniqueValues = [];

     for (let i = 0; i < nums.length; i++) {
         if (!uniqueValues.includes(nums[i])) {
             uniqueValues.push(nums[i]);
             k++
         }
     }

     for (let i = 0; i < k; i++) {
        nums[i] = uniqueValues[i];
     }

     return k;
    
};

/*
logic:
- Initialize a counter k starting at 0.
- Traverse the nums array from end to beginning.
- - Check if the current value matches the next value in the iteration (nums[i] === nums[i - 1]).
- - - If they match, remove the current value (nums[i]) from nums using the .splice(i, 1) method and increment the k counter by 1.
- Return nums and k.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
            k++
        }
    }
    
    console.log(nums, k);
};

//Solution without built in methods:

/*
logic:
- initialize k counter at 0
- traverse array nums with i starting at index 1
- - check if current value DOES NOT equal the previous value
- - - if check is true, increment k + 1, and set nums[k] to equal nums[i] (manual shifting window)
- after loop ends, remove all values from array after nums[k] (set nums.length to k + 1)
- return nums & k

diagram:
k = 0
i = 1

	            k
                                   i
        0  1  2  3  4  5  6  7  8  9
nums = [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]

when nums.length = k + 1 (or 5) then:
        1  2  3  4  5
nums = [0, 1, 2, 3, 4] 

expected output: [0, 1, 2, 3, 4], 5
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            k++;
            nums[k] = nums[i];
        }
    }

    nums.length = k + 1;

    console.log(nums, k + 1);
};