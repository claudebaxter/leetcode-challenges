/*
Add Binary
Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 
Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

/*
logic:
- init parsedA variable assigned to parsed integer value for a (use BigInt with string interpolation using binary prefix 0a)
- init parsedB variable assigned to parsed integer value for b (use BigInt with string interpolation using binary prefix 0b)
- init sum variable assigned to parsedA + parsedB
- return sum as a string with radix parameter of 2 (for binary string)

Time Complexity: O(1) / constant
Space Complexity: O(1) / constant


Binary Conversion Breakdown:
Here's a breakdown of the binary number 1101:

Working from the right digit to the left digit, we check each value with the following formula:

N * 2^Index

The rightmost digit (1) is at position 0, so its value is 1 * 2^0 = 1.
The second-rightmost digit (0) is at position 1, so its value is 0 * 2^1 = 2.
The third-rightmost digit (1) is at position 2, so its value is 1 * 2^2 = 4.
The leftmost digit (1) is at position 3, so its value is 1 * 2^3 = 8.

The binary number 1101 can then be calculated as:

1 * 2^0 + 0 * 2^1 + 1 * 2^2 + 1 * 2^3 = 1 + 0 + 4 + 8 = 13
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let parsedA = BigInt(`0b${a}`);
    let parsedB = BigInt(`0b${b}`);
    
    let sum = parsedA + parsedB;
    
    return sum.toString(2);
};