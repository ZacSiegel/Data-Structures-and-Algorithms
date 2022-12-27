// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {
    let maxProfit: number = 0;
    let left: number = 0;
    let right: number = 1;
    while(right < prices.length){
        let currProfit: number = prices[right] - prices[left];
        maxProfit = Math.max(currProfit, maxProfit);
        if(prices[right] < prices[left]) left = right;
        right++;
    }
    return maxProfit;
};
