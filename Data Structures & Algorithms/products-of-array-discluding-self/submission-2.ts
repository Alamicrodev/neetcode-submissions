class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
       
       const resultArrayStr : string[] = []

       for (let i = 0; i < nums.length; i++) {
           
           let numsCpy = [...nums] 
           numsCpy[i] = 1; 

           let numsStr = numsCpy.join("*")
           resultArrayStr[i] = numsStr; 
       }

       const resultArray : number[] = []

       for (let i = 0; i< resultArrayStr.length; i++) {
             resultArray[i] = eval(resultArrayStr[i])
       }

        return resultArray

    }
}
