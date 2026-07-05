class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        
        const prefix : number[] = []
        const postfix : number[] = []

        for (let i = 0; i < nums.length; i++) {
             if (i == 0) 
             {
                prefix[i] = nums[i]
             }
             else {
                prefix[i] = nums[i]*prefix[i-1];
             }
        }
        
        for (let i = nums.length-1; i >= 0; i--) {
            if (i == nums.length-1) { postfix[i] = nums[i]}
            else {postfix[i] = postfix[i+1]*nums[i]}
        }

        let resultArray : number[] = []

        for (let i = 0; i < nums.length; i++) {
            if (i == 0) {
                resultArray[i] = postfix[i+1]
            } 
            else if (i == nums.length-1) {
                resultArray[i] = prefix[i-1]
            }
            else {
                resultArray[i] = prefix[i-1]*postfix[i+1];
            }
        }

        return resultArray
    }
}
