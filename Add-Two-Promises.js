/*
2723. Add Two Promises
Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

Example 1:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
Example 2:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
Output: -2
Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.
 
Constraints:

promise1 and promise2 are promises that resolve with a number
*/

/*
logic:
The addTwoPromises function is defined as an async function, allowing the use of await inside it.
Inside the function, await is used to wait for the resolutions of promise1 and promise2. The resolved values are stored in the variables one and two respectively.
A new promise is created using the Promise constructor, with a resolver function that immediately resolves the promise with the sum of one and two.
The new promise is returned from the addTwoPromises function.
*/

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

var addTwoPromises = async function(promise1, promise2) {
    let one = await promise1;
    let two = await promise2;
    return new Promise((res) => res(one + two));
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */