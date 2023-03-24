/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let output = ""
    
    for (let i = 0; i < s.length; i++) {
  for (let j = s.length - 1; j >= i; j--) {
      let subStr = s.slice(i, j+1);
      if (isPalindrome(subStr) && subStr.length > output.length) {
          output = subStr;
      }
    }
  }
  return output;
};

function isPalindrome(s) {
    for (let i = 0; i < s.length / 2; i ++) {
        if (s[i] !== s[s.length - i - 1]) {
            return false;
        }
    }
    return true;
};
  