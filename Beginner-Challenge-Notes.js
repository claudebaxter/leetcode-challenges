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
