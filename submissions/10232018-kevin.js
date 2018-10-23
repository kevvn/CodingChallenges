/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let currMin = prices[0];
    let currMax = 0;
    
    for(let i = 0; i< prices.length;i++){
        currMin = Math.min(currMin,prices[i]);
        currMax = Math.max(currMax,prices[i] - currMin);
    }
    return currMax;
};
