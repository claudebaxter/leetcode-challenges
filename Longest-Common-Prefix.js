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

*/

/*
logic:
determine length of longest string:
- init empty lengths array
- traverse strs start to end one item at a time
- - push strs[i].length to lengths array at each iteration
- init maxLength to the highest integer value in legnths array
- init prefix as empty string
- traverse each string in strs array from start to end
- - init letter inside loop assigned to first letter of first string strs[0][i]
- - if every string has the same letter at the same index, add letter to prefix (use .every method)
- - else break out of the loop
- return prefix (will be empty string if no matches)

Time Complexity: O(n) / linear (n = # items in strs array)
Space Complexity: O(n + m) / linear (m = # of letters in prefix string)

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let lengths = [];
    
    for (i = 0; i < strs.length; i++) {
        lengths.push(strs[i].length);
    }
    
    let prefix = "";
    let maxLength = Math.max(...lengths);
    
    for (i = 0; i < maxLength; i++) {
        let letter = strs[0][i]
        if (strs.every(str => str[i] === letter)) {
            prefix += letter;
        } else {
            break;
        }
    }
    
    return prefix;
};

/*
logic:
- init empty output string
- init maxLength to equal the length of the longest string in strs array
- traverse each string in strs array starting from beginning until letters no longer match (or you reach the end of longest string)
- - on each iteration, if the prefix-letters match, concatenate them to the output string
- - otherwise break out of the loop
- return the output string after the loop ends

Time Complexity: O(n * m) / linear (n = number of strings, m = length of the longest string)
Space Complexity: O(m) / linear (m = length of the output string)

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