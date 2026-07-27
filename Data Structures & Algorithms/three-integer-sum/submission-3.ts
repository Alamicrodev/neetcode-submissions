class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][]
    { 
      //sort the nums array  
      nums.sort((a,z) => a-z); 
      const outputArray : number[][] = []
      
      for (let i = 0; i < nums.length; i++) {
           if (i != 0 && nums[i] == nums[i-1]){
            continue; //moves to the next iteration of i; 
           }
          
           let j = i+1; 
           let k = nums.length-1; 
           let target = -nums[i];
            
           while  (j < k) {
              if (nums[j]+nums[k] < target) {
                j++; 
                continue; 
              }
              else if (nums[j]+nums[k] > target) {
                k--; 
                continue; 
              }
              else {
                outputArray.push([nums[i], nums[j], nums[k]]); 
                j++; 
                while(j<k && nums[j] == nums[j-1]) {
                  j++; 
                }
              }
           }
      }
       
      return outputArray  
    }
}