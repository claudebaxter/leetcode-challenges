/*
20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

let outputOne = [];

for (i = 0; i < s.length; i++) {

	if (s[i] === `(` || s[i] === `[` || s[i] === `{`) {
		outputOne.push(s[i]);
	} else {
		let outputTwo = outputOne.pop();
		if (s[i] === `)` && outputTwo !== '(' || s[i] === `]` && outputTwo !== '[' || s[i] === `}` && outputTwo!= '{') {
			return false;
		}
	}
}

return outputOne.length === 0;
    
};

/*
iterate through input s character by character, push all opening brackets to outputOne array
if a closing bracket is found, the last opening bracket is popped (removed) from the outputOne
array and the current character (closing bracket) is compared to this opening bracket--if matched,
returns true.

If all opening and closing brackets match then outputOne array at the end should be 0, resulting
in a 'true' response, otherwise will return 'false'
*/