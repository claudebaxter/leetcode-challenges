/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 *
2635. Apply Transform Over Each Element in Array

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
 
 console.log(map([1,2,3], function plusone(n) { return n + 1; })); // [2, 3, 4];
 console.log(map([1,2,3], function plusI(n, i) { return n + i; })); // [1, 3, 5];
 console.log(map([10,20,30], function constant() { return 42; }))


                   i 
input arr: [ 1, 2, 3 ]
input function: [Function: plusone]

let Output = [2, 3, 4];

                   i
input arr: [ 1, 2, 3 ]
input function: [Function: plusI]

let Output = [ 1, 3, 5];

                     i
input arr: [ 10, 20, 30 ]
input function: [Function: constant {return 42;}]

let Output = [ 42, 42, 42 ]

init empty Output array [];
foreach value (arr, fn) { Output.push(fn(arr[i]))}
return Output;

time/space complexity: O(n)
Approach: Functional, keeps input immutable to return output using built in methods

 **/


var map = function(arr, fn) {
    let Output = [];
    arr.forEach((element, index) => {
        Output.push(fn(element, index))
    });
    return Output;
};