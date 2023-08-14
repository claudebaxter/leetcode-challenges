/*
28. Find the Index of the First Occurrence in a String
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 
Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
*/

/*
logic:
-initiate needleLength value to track length of needle string
-iterate through haystack from beginning to end
  -compare needle to haystack[i] - haystack[i + needleLength)
  -if haystack[i, i + needleLength] === needle
	return i
	break;
    else return -1;
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let needleLength = needle.length;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substring(i, i + needleLength) === needle) {
            return i;
        } 
    }
    return -1;
};

/*
logic:
- init n counter for needle string starting at 0
- traverse haystack start to end one item per iteration
- - if haystack[i] = needle[n], increment n + 1
- - else if n > 0, move i to = i - n and then reset n to = 0
- - if n is the same as the length of the needle string, return index of needle (i - n + 1)
- if loop ends without finding needle in haystack, return -1

Time Complexity: O(n) / linear (n = # letters in haystack)
Space Complexity: O(1) / constant

Approach: 2 pointer approach

*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n = 0;
    
    for(let i = 0; i < haystack.length; i++){
        if(haystack[i]===needle[n]) n++;
        else {
            if (n > 0) i = i - n;
            n = 0;
        }
        if (n === needle.length) {
            return i - n + 1;
        }
    }
    return -1;
};

//"cheater version":

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle); 
};