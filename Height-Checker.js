/*
Height Checker
A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

Return the number of indices where heights[i] != expected[i].

Example 1:

Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
heights:  [1,1,4,2,1,3]
expected: [1,1,1,2,3,4]
Indices 2, 4, and 5 do not match.
Example 2:

Input: heights = [5,1,2,3,4]
Output: 5
Explanation:
heights:  [5,1,2,3,4]
expected: [1,2,3,4,5]
All indices do not match.
Example 3:

Input: heights = [1,2,3,4,5]
Output: 0
Explanation:
heights:  [1,2,3,4,5]
expected: [1,2,3,4,5]
All indices match.
 
Constraints:

1 <= heights.length <= 100
1 <= heights[i] <= 100
*/

/*
logic:
- init sortedArray = heights.sort((a, b) => a - b))
- init k counter set to 0
- traverse heights start to end
- - compare heights[i] to sortedArray[i];
- - - for each height that is different, increment k++
- return k

time complexity: O(n log n) n = heights.length / logarithmic
space complexity: O(1) / constant
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let k = 0;
    let sortedArr = [...heights];
    sortedArr.sort((a, b) => a - b);
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedArr[i]) k++;
    }
    
    return k;
};

/*
using bubbleSort instead of .sort method
time complexity: O(n^2) n = heights.length / quadratic
space complexity: O(1) / constant


/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let k = 0;
    let sortedArr = [...heights];
    
    for (let i = 0; i < sortedArr.length - 1; i++) {
        for (let j = 0; j < sortedArr.length - i - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                const temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedArr[i]) k++;
    }
    
    return k;
};


/*
solution using mergeSort implementation with no built in methods
heightChecker(heights) logic:
- init sortedArray which calls recursive fn mergeSort with input of (arr, start, end) (in this case, [...heights], 0, heights.length - 1)
- init k counter set to 0
- traverse heights start to end
- - compare heights[i] to sortedArray[i];
- - - for each height that is different, increment k + 1
- return k

mergeSort(arr, start, end) logic:
- if start is >= end, return arr[start] (base case)
- init mid value = lowest value of (start + 2nd) / 2 (use Math.floor)
- init left arr by calling mergeSort recursively with input (arr, start, mid)
- init right arr by calling mergeSort recursively with input (arr, mid + 1, end) 
- return fn call merge(left, right)

merge(left, right) logic:
- init empty merged array
- init i & j pointers starting at 0
- while i & j haven't reached the end of left or right arrays:
- - if left[i] is less or equal to right[j], push left[i] to merged and increment i + 1, otherwise push  right[j] to merged and increment j + 1
- while i < left.length, and j has reached the end of right.length:
- - push left[i] to merged and increment i + 1
- while j < right.length, and i has reached the end of left.length:
- - push right[j] to merged and increment j + 1
- return merged / sorted array


diagram:
input heights = [1, 1, 4, 2, 1, 3]

mid/left/right 0 [ 1 ] [ 1 ]
merged/i/j [ 1, 1 ] 1 1

mid/left/right 1 [ 1, 1 ] [ 4 ]
merged/i/j [ 1, 1, 4 ] 2 1

mid/left/right 3 [ 2 ] [ 1 ]
merged/i/j [ 1, 2 ] 1 1

mid/left/right 4 [ 1, 2 ] [ 3 ]
merged/i/j [ 1, 2, 3 ] 2 1

mid/left/right 2 [ 1, 1, 4 ] [ 1, 2, 3 ]
merged/i/j [ 1, 1, 1, 2, 3, 4 ] 3 3

time complexity: O(n log n) n = heights.length / logarithmic
space complexity: O(1) / constant
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let k = 0;
    let sortedArr = mergeSort([...heights], 0, heights.length - 1);
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedArr[i]) k++;
    }
    
    return k;
};

function mergeSort(arr, start, end) {
    if (start >= end) {
        return [arr[start]];
    }
    
    const mid = Math.floor((start + end) / 2);
    const left = mergeSort(arr, start, mid);
    const right = mergeSort(arr, mid + 1, end);
    
    console.log("mid/left/right", mid, left, right);
    
    return merge(left, right);
};

function merge(left, right) {
    let merged = [];
    let i = 0;
    let j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++
        }
    }
    
    while (i < left.length) {
        merged.push(left[i]);
        i++;
    }
    
    while (j < right.length) {
        merged.push(right[j]);
        j++;
    }
    
    console.log("merged/i/j", merged, i, j)
    
    return merged;
}