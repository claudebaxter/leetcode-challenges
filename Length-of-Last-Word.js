/*
58. Length of Last Word
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 
Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
*/

/*
logic:
initialize words array to split sentence into array of words
	remove any additional spaces so they are not added to the words array
	(match method / regex can accomplish this)
initialize lastWord variable with value of last element in words array
return length of lastWord
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = s.match(/[a-zA-Z]+/g);
    let lastWord = words[words.length - 1];
    return lastWord.length;
};