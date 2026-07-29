class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        
        let i = 0; 
        let j = 1; 
        let maxProfit = 0;

        while(j < prices.length) {
           if (prices[j] - prices[i] < 0) {
               i=j; 
               j++; 
           }

           if (prices[j] - prices[i] > maxProfit) {
             maxProfit = prices[j] - prices[i]
             j++; 
           }
           else {
             j++; 
           }
        }

        return  maxProfit
    }
}
