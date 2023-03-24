/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let input = s;
    let output = "";
    let subLength = 0;

    for (i = 0; i < input.length; i++) {
        if (!output.includes(input[i]))
        {
            output += input[i]
        } 
        else 
        {
            let index = output.lastIndexOf(input[i]);
            output = output.substring(index + 1) + input[i];
        }
        subLength = Math.max(subLength, output.length);
    }
    return subLength;
};