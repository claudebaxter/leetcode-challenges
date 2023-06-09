/*
2695. Array Wrapper
Create a class ArrayWrapper that accepts an array of integers in it's constructor. This class should have two features:

When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
 
Example 1:

Input: nums = [[1,2],[3,4]], operation = "Add"
Output: 10
Explanation:
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
obj1 + obj2; // 10
Example 2:

Input: nums = [[23,98,42,70]], operation = "String"
Output: "[23,98,42,70]"
Explanation:
const obj = new ArrayWrapper([23,98,42,70]);
String(obj); // "[23,98,42,70]"
Example 3:

Input: nums = [[],[]], operation = "Add"
Output: 0
Explanation:
const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);
obj1 + obj2; // 0
 
Constraints:

0 <= nums.length <= 1000
0 <= nums[i] <= 1000
Note: nums is the array passed to the constructor
*/

/*
logic:
- add this.nums property to ArrayWrapper constructor
- - (nums is already passed as an arg just add prop this.nums = nums)

- update ArrayWrapper.valueOf to sum all values of array
- - use .flat method on this.nums to flatten nested arrays
- - use .reduce callback function to sum values of flattenedd array
- - return summedArray 

- update ArrayWrapper.toString to convert nums to a string
- - use JSON.stringify on this.nums to produce desired output format (.toString method removes brackets)
- - return stringified array
*/

/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    let flattenedArr = this.nums.flat(Infinity);
    let sumArr = flattenedArr.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
    return sumArr;
}

ArrayWrapper.prototype.toString = function() {
    let arrayStr = JSON.stringify(this.nums);
    return arrayStr;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */