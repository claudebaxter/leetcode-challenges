/*
14. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

SOLUTION:
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let output = "";
    let maxLength = Math.min(...strs.map(str => str.length));

    for (i = 0; i < maxLength; i++) {
        let letter = strs[0][i];
        if (strs.every(str => str[i] === letter)) {
            output += letter;
        } else {
            break;
        }
    };
    return output;
    
};