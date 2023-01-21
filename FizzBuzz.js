/*
412. Fizz Buzz
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

Constraints:

1 <= n <= 104

SOLUTION: */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {

    let numArr = new Array(n).fill(true).map((e, i) => i+1)

    const numToStrArr = numArr.map((number) => {
        return number.toString();
    });

    let strArr = numToStrArr;

    for (let i = 0; i <= numArr.length; i++) {
        if (numArr[i] % 15 == 0) {
            strArr.splice(i, 1, "FizzBuzz") 
        } else if (numArr[i] % 5 == 0) {
            strArr.splice(i, 1, "Buzz")
        } else if (numArr[i] % 3 == 0) {
            strArr.splice(i, 1, "Fizz")
        }
    }

    return strArr;

};