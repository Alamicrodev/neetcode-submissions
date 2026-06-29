class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
       twoSum(nums: number[], target: number): number[] {
         
         const check : {[ key : number] : number} = {}
          
          for (let i = 0; i < nums.length; i++) {
              if (check[nums[i]] != undefined && check[nums[i]] != i) {
                return [check[nums[i]], i]
              }
              else {
                  let required = target - nums[i] 
                  check[required] = i;
              }
          }

          return []
    }
}
