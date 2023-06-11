/*
1108. Defanging an IP Address
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
 
Constraints:

The given address is a valid IPv4 address.
*/

 /**
 logic:
 - init variable to store modified address modAddress
 - - use address.replace() with regex to insert [] around .s
 - - (/\./g, "[.]")
 - return modAddress
 */

/**
 * @param {string} address
 * @return {string}
 */

var defangIPaddr = function(address) {
    let modAddress = address.replace(/\./g, "[.]");
    return modAddress;
};