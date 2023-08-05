/*
121. Best Time to Buy and Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

/*
logic:
- init buy assigned to first item in prices array
- init maxProfit counter assigned to 0
- traverse prices start to end one item per iteration
- - if prices[i] > buy, adjust buy to prices[i]
- - else if prices[i] - buy > maxProfit, adjust sell to the result of (prices[i] - maxProfit) 
- return maxProfit after loop ends

Iterative / functional approach
Time complexity: O(n) / linear (n = # of values in prices)
Space complexity: O(1) / constant
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < buy) buy = prices[i]
        else if (prices[i] - buy > maxProfit) maxProfit = prices[i] - buy;
    };

    return maxProfit;
};