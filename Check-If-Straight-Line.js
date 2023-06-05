/*
1232. Check If It Is a Straight Line
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Example 1:

Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
Example 2:

Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false

Constraints:

2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.
*/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

/**
 * /**
 * Logic:
 * - Iterate through each coordinate pair in the given array:
 *   - Store the x and y values in separate arrays.
 * - Check if all x values or all y values are the same:
 *   - If so, return true since they form a straight line.
 * - Initialize an empty array to store the ratios of differences.
 * - Iterate through the coordinate pairs:
 *   - Calculate the difference in x and y between the current and previous coordinates.
 *   - Calculate the ratio of x difference to y difference and store it in the array.
 * - Compare all the ratios with the first ratio:
 *   - If any ratio is different, return false as they do not form a straight line.
 * - If all ratios are the same, return true as they form a straight line.
 */

 */

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  const xValues = coordinates.map(coord => coord[0]);
  const yValues = coordinates.map(coord => coord[1]);

  if (new Set(xValues).size === 1 || new Set(yValues).size === 1) {
    return true;
  }

  const differences = [];

  for (let i = 1; i < coordinates.length; i++) {
    const [prevX, prevY] = coordinates[i - 1];
    const [currX, currY] = coordinates[i];
    const xDiff = currX - prevX;
    const yDiff = currY - prevY;
    differences.push(xDiff / yDiff);
  }

  const firstRatio = differences[0];

  for (let i = 1; i < differences.length; i++) {
    if (differences[i] !== firstRatio) {
      return false;
    }
  }

  return true;
};