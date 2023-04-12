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
