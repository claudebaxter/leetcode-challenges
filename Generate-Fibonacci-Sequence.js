/*
2648. Generate Fibonacci Sequence
Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

Example 1:

Input: callCount = 5
Output: [0,1,1,2,3]
Explanation:
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
Example 2:

Input: callCount = 0
Output: []
Explanation: gen.next() is never called so nothing is outputted
 
Constraints:

0 <= callCount <= 50
*/

/*
logic:
The function fibGenerator is declared as a generator function using the function* syntax. It takes no parameters.

Inside the function, two variables current and next are initialized with values 0 and 1, respectively. These variables will keep track of the current and next Fibonacci numbers.

The while (true) loop is used to create an infinite loop that generates Fibonacci numbers indefinitely.

Within the loop, the yield keyword is used to pause the execution and produce the current Fibonacci number (current). The yield statement acts as a generator, returning the value and preserving the state of the function.

After the yield statement, an array destructuring assignment [current, next] = [next, current + next] is performed. This assigns the value of next to current and the sum of current and next to next. This update step calculates the next Fibonacci number in the sequence.

The loop continues indefinitely, yielding the current Fibonacci number each time and updating current and next to generate the next number in the sequence.

Moving to the usage of the fibGenerator:

A variable gen is declared and assigned with the result of calling fibGenerator(). This creates a generator object.

Calling gen.next().value invokes the next() method on the generator object. This resumes the execution of the fibGenerator function until the next yield statement is encountered.

The first gen.next().value call returns the value 0, which is the initial value of current before any updates.

The second gen.next().value call resumes the execution of the generator function, allowing it to proceed to the next yield statement. It returns the value 1, which is the second Fibonacci number.
*/

/**
 * @return {Generator<number>}
 */
var fibGenerator = function*(val) {
    let current = 0;
    let next = 1;

    while (true) {
        yield current;

        [current, next] = [next, current + next]
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */