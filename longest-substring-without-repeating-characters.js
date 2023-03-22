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
            if (output.length > subLength) {
                subLength = output.length;
            }
            output = "";
        }
    }
    return subLength > output.length ? subLength : output.length;
};