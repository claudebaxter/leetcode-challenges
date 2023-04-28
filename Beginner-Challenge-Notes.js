/*Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.*/

function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}


/*Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).*/

function getIndexToIns(arr, num) {
  arr.push(num);
  let sortedInput = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedInput.length; i++) {
      if (num === sortedInput[i]) return i;
  }
}

console.log(getIndexToIns([40, 60], 50)); //returns 1

//alternative solution:

function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns([1, 3, 4], 2); //returns 1

/*Falsy Bouncer
Remove all falsy values from an array. Return a new array; do not mutate the original array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.*/

function bouncer(arr) {
  let output = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i]) {
      output.push(arr[i]);      
    }
  }
  return output.reverse();
}

//ANOTHER EXAMPLE

function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9])); //returns [7, "ate", 9]


/*Slice and Splice
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.*/

function frankenSplice(arr1, arr2, n) {
  let newArray = arr2.slice();
  newArray.splice(n, 0, ...arr1);
  return newArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//ANOTHER EXAMPLE:

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}



//Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  let lowerCase = str.toLowerCase();
  let output = "";

  for (let i = 0; i < lowerCase.length; i++) {
    if (i === 0) {
      output += lowerCase[i].toUpperCase();
    } else if (lowerCase[i - 1] === " ") {
      output += lowerCase[i].toUpperCase();
    } else {
      output += lowerCase[i]
    }
  }

  return output;
}

console.log(titleCase("I'm a little tea pot"));



//Boo who
//Check if a value is classified as a boolean primitive. Return true or false.
//Boolean primitives are true and false.

function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}

console.log(booWho(false));

//another example of Boo Who:

function booWho(bool) {
  return typeof bool === "boolean";
}


//Finders Keepers
//Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = undefined;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true) {
      num = arr[i];
      break;
    }
  }
  return num;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); //returns 8

//this is another simple solution for the above function:

function findElement(arr, func) {
  return arr.find(func);
}


//Truncate a String
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
//.slice() method also works in place of .substring

function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  } else {
    return str.substring(0, num) + "...";
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));


//Repeat a String str (1st arg) for num times (2nd arg), return empty string if num is not a positive number

function repeatStringNumTimes(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

console.log(repeatStringNumTimes("abc", 3));


//Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  let targetLength = target.length;
  let strEnd = str.substring(str.length - targetLength)
  if (strEnd === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");


//return larges number in array
function largestOfFour(arr) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    output.push(Math.max(...arr[i]));
  }
  return output;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//find longest word in string
function findLongestWordLength(str) {
  let inputArr = str.split(" ");
  let outputArr = inputArr.map(w => w.length);
  return Math.max(...outputArr);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog"); //returns 6, jumped is 6 letters long and is the longest word

//e.g, n = 5 returns output = 120 (1 * 2 *3 * 4 * 5)
function factorialize(n) {
  let result = [];
  let output = 1;

  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  for (let i = 0; i < result.length; i++) {
    output *= result[i];
  }
  return output;
}

function reverseString(input) {
  return input.split("").reverse().join("");
}


function sumArray(input) {
  let output = 0;
  for (let i = 0; i < input.length; i++) {
    output += input[i];
  }
  return output;
}
