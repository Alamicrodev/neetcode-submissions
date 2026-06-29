class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
         
         const myHash : {[ key : number] : number} = {}
          
          for (let i = 0; i < nums.length; i++) {
              let required = target - nums[i] 
              myHash[required] = i 
          }

          for (let i = 0; i < nums.length; i++) {
              if (myHash[nums[i]] && myHash[nums[i]] !== i) {
                return i >= myHash[nums[i]]? [i, myHash[nums[i]]] : [myHash[nums[i]], i]
              }
          }

          return []
    }
}
