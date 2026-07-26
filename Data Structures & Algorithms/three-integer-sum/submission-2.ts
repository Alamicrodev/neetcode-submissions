class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][]
    {
       
       //sort the array
       nums.sort((a,z) => a-z); 
       let resultArray : number[][] = [];

       for (let i = 0; i < nums.length; i++) {
           if (i != 0 && nums[i] === nums[i-1]) {
              continue; 
              }
           let req = -nums[i]
           let k = i+1; 
           let j = nums.length-1; 

           while (k < j) {
              if (nums[k] + nums[j] > req)  {
                 j--;
                 continue;
              }
              else if (nums[k] + nums[j] < req) {
                 k++; 
                 continue;
              }
              else {
                  resultArray.push([nums[i], nums[k], nums[j]])
                  k++;
                  while (k < j && nums[k] == nums[k-1]) k++;
                  continue;
              }
           }
       }
        
        return resultArray
    }
}