/*
Reverse String
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 
Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
*/

/*
logic:
- init j pointer at end of s (s.length - 1);
- traverse s with two pointers (i starting at beginning, j starting at end) until they meet in the middle
- - on each iteration, swap the values at s[i] & s[j]
- - increment i and decrement j each iteration
- return nothing after loop ends (per instructions, s has already been modified in place, return void statement)

Time Complexity: O(n) / linear (n = # of items in s)
Space Complexity: O(1) / constant 
Approach: 2-pointer approach
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let j = s.length - 1;
    
    for (let i = 0; i < s.length / 2; i++) {
        [s[i], s[j]] = [s[j], s[i]];
        j--;
    }
    
    return;
};