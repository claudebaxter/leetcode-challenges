/*
228. Summary Ranges
You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b

Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
*/

 /**
 logic:
 - if nums.length is 0, return empty array
 - initialize empty output array
 - initialize startRange & endRange values to nums[0]
 - if nums.length is only 1, push startRange to output array and return output
 - iterate through each value in nums array
 - - start at index 1 (2nd value)
 - - check if nums[i] - endRange === 1
 - - - if yes, update the endRange to nums[i]
 - - - if not:
 - - - - init currentRange as a string copy of startRange
 - - - - if startRange != endRange then concatenate currentRange with '->' + endRange.toString() 
 - - - - push current range to output array & update startRange & endRange to nums[i]
 - - after iterating through all values, add the last range (startRange->endRange) to the output array
 - return output array
  */

/**
 * @param {number[]} nums
 * @return {string[]}
 */

var summaryRanges = function(nums) {
    if (nums.length === 0) {
        return []; 
    }

    let output = [];
    let startRange = nums[0];
    let endRange = nums[0];

    if (nums.length === 1) {
        output.push(startRange.toString());
        return output;
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - endRange === 1) {
            endRange = nums[i];
        } else {
            let currentRange = startRange.toString();
            if (startRange !== endRange) {
                currentRange += '->' + endRange.toString();
            }
            output.push(currentRange);
            startRange = nums[i];
            endRange = nums[i];
        }
    }

    let currentRange = startRange.toString();
    if (startRange !== endRange) {
        currentRange += '->' + endRange.toString();
    }
    output.push(currentRange);

    return output;
};