/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let numOne = x;
    let numTwo = parseInt(x.toString().split("").reverse().join(""));

    if (numOne === numTwo ) { return true} else {return false};
};