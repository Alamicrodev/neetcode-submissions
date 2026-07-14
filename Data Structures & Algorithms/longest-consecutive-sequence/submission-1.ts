class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
         
        if (nums.length == 0) {
            return 0;
        }


        const numsSet = new Set(nums); 
        let maxSeq = 1; 
       
        for (let i = 0; i< nums.length; i++) {
              
              if (numsSet.has(nums[i]-1)) {
                continue 
              }
              else {
                  let seqLen = 1; 
                  let itter = nums[i]

                  while (numsSet.has(itter+1)) {
                       seqLen++; 
                       itter++; 
                  }   

                  if (seqLen > maxSeq) {
                      maxSeq = seqLen
                  }
              }
        }

        return maxSeq
    } 

 
}
