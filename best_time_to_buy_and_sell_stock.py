class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        price_left = 0
        price_right = 1
        max_profit = 0
        while price_right < len(prices):
            current_profit = prices[price_right] - prices[price_left]
            if prices[price_right] > prices[price_left]:
                max_profit = max(current_profit, max_profit)
            else:
                price_left = price_right
            price_right += 1
        return max_profit
