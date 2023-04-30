/*Avoid Mutations and Side Effects Using Functional Programming
If you haven't already figured it out, the issue in the previous challenge was with the splice call in the tabClose() function. Unfortunately, splice changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.
This is a small example of a much larger pattern - you call a function on a variable, array, or an object, and the function changes the variable or something in the object.
One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.
The previous example didn't have any complicated operations but the splice method changed the original array, and resulted in a bug.
Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.
Let's try to master this discipline and not alter any variable or object in our code.
Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.*/


// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  return fixedValue + 1;
  // Only change code above this line
}



/*Understand the Hazards of Using Imperative Code
Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs. But before we get there, let's look at an imperative approach to programming to highlight where you may have issues.
In English (and many other languages), the imperative tense is used to give commands. Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.
Often the statements change the state of the program, like updating global variables. A classic example is writing a for loop that gives exact directions to iterate over the indices of an array.
In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.
JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. For example, instead of using the for loop mentioned above, you could call the map method which handles the details of iterating over an array. This helps to avoid semantic errors, like the "Off By One Errors" that were covered in the Debugging section.
Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened. Let's try to model this using some simple object-oriented code.
A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is held in an array. After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open. Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.
The code editor shows an implementation of this functionality with functions for tabOpen(), tabClose(), and join(). The array tabs is part of the Window object that stores the name of the open pages.
Examine the code in the editor. It's using a method that has side effects in the program, causing incorrect behaviour. The final list of open tabs, stored in finalTabs.tabs, should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the list produced by the code is slightly different.
Change Window.prototype.tabClose so that it removes the correct tab.*/

// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);



/*In the code editor, the prepareTea and getTea functions are already defined for you. Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.*/

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC) //returns ['greenTea', 'greenTea', ....] 40 times in array
// Only change code above this line


/*Understand Functional Programming Terminology
The FCC Team had a mood swing and now wants two types of tea: green tea and black tea. General Fact: Client mood swings are pretty common.
With that information, we'll need to revisit the getTea function from last challenge to handle various tea requests. We can modify getTea to accept a function as a parameter to be able to change the type of tea it prepares. This makes getTea more flexible, and gives the programmer more control when client requests change.
But first, let's cover some functional terminology:
Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.
Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.
The functions that take a function as an argument, or return a function as a return value, are called higher order functions.
When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.
Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively. Note that the getTea function has been modified so it now takes a function as the first argument.
Note: The data (the number of cups of tea) is supplied as the last argument. We'll discuss this more in later lessons.*/

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);


//above is beginning of Functional Programming section


/*Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.*/

function chunkArrayInGroups(arr, size) {
  let index = 0;
  let chunkArr = [];
  while (index < arr.length) {
    chunkArr.push(arr.slice(index, index + size));
    index += size;
  }
  return chunkArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // returns [ [ 'a', 'b' ], [ 'c', 'd' ] ]


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
