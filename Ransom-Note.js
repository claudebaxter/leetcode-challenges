/*
383. Ransom Note
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

SOLUTION:
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    //split magazine into an array of substrings composed of individual letters:
    const myArray = magazine.split(""); 
    //for loop iterates through ransomNote from index 0 through the end of the string:
    for (let i = 0; i < ransomNote.length; i++) { 
        //if loop uses check ransomeNote for the first occurence of the current index 
        //of myArray, if it returns -1 then it is false 
        //(if indexOf can't find what it's searching for in the string, it returns a -1 instead of the index where the occurence is located):
        if (myArray.indexOf(ransomNote[i]) === -1) {  
            return false;
        //if indexOf can find what it's searching for, it uses the splice method to remove this from myArray (array of magazine letters),
        //to avoid using the same letter twice--if the same letter is required multiple times for the ransomNote, and returns true
        } else {
            myArray.splice(myArray.indexOf(ransomNote[i]), 1); 
        }
    }
        return true;
};