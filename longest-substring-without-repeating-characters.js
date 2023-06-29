/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let output = "";
    let subLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (!output.includes(s[i])) {
            output += s[i];
        } else {
            let index = output.lastIndexOf(s[i]);
            output = output.substring(index + 1) + s[i];
        }
        subLength = Math.max(subLength, output.length);
    }
    return subLength;
};
