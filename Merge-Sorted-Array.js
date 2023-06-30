/*
Merge Sorted Array
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109

Follow up: Can you come up with an algorithm that runs in O(m + n) time?
*/

/*
logic
- at index m of nums1, insert ...nums2
- remove all elements from nums1 after index of (m + n)
- sort nums1 from lowest to highest value
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, 0, ...nums2);
    nums1.splice(m + n);
    nums1.sort((a, b) => a - b);
};



//O(n) solution that doesn't use .sort() or .splice():

/*
diagram:
p1 0
p2 0
p3 1
           p3
        p1       
        0  1  2  3  4  5
nums1: [1, 2, 2, 3, 5, 6]

     p2
        0  1  2
nums2: [2, 5, 6]

logic:
- intialize sliding window pointers:
	pointerOne = m - 1 (end of nums1 array)
	pointerTwo = n - 1 (end of nums2 array)
	pointerMerged = m + n - 1 (end of merged nums1 array)
- traverse nums1 & nums2 with a sliding window
- while pointerOne & pointerTwo are >= 0
- - check if nums1[pointerOne] is >= to nums2[pointerTwo]
- - - yes: set nums1[pointerMerged] = nums1[pointerOne], decrement pointerOne - 1
- - - no: set nums1[pointerMerged] = nums2[pointerTwo], decrement pointerTwo - 1
- - decrement pointerMerged by - 1
- if pointerOne terminates loop before nums2 is merged, keep traversing window with pointerTwo & pointerMerged
- while pointerTwo >= 0
- - set nums1[pointerMerged] = nums2[pointerTwo]
- - decrement pointerMerged & pointerTwo by - 1
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let pointerOne = m - 1;
    let pointerTwo = n - 1;
    let pointerMerged = m + n - 1;
    
    while (pointerOne >= 0 && pointerTwo >= 0) {
        if (nums1[pointerOne] >= nums2[pointerTwo]) {
            nums1[pointerMerged] = nums1[pointerOne];
            pointerOne--;
        } else {
            nums1[pointerMerged] = nums2[pointerTwo];
            pointerTwo--;
        }
        pointerMerged--;
    }
    
    while (pointerTwo >= 0) {
        nums1[pointerMerged] = nums2[pointerTwo];
        pointerMerged--;
        pointerTwo--;
    }
};