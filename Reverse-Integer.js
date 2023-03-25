<<<<<<< HEAD
/*7. Reverse Integer
Medium
10.1K
11.8K
Companies
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x < 0
    const input = Math.abs(x).toString();
    let output = input.split("").reverse().join("");

    if (isNegative) {
        output = "-" + output;
    } 

    if (output.charAt(0) === "0") {
        output = output.substring(1);
        console.log("output2", output);
    }

<<<<<<< HEAD
    const lowerRange = -2147483648;
    const upperRange = 2147483647;
    if (output < lowerRange || output > upperRange) {
        output = 0;
    }

=======
>>>>>>> master
    return output;
    
=======
/*7. Reverse Integer
Medium
10.1K
11.8K
Companies
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x < 0
    const input = Math.abs(x).toString();
    let output = input.split("").reverse().join("");

    if (isNegative) {
        output = "-" + output;
    } 

    if (output.charAt(0) === "0") {
        output = output.substring(1);
        console.log("output2", output);
    }

<<<<<<< HEAD
    const lowerRange = -2147483648;
    const upperRange = 2147483647;
    if (output < lowerRange || output > upperRange) {
        output = 0;
    }

=======
>>>>>>> master
    return output;
    
>>>>>>> 7dc40952dc74b20c03bf86b2f45aed11107fe1c2
};