class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        
        const hashCount : {[key: number]: number} = {}

        for (let i = 0; i < nums.length; i++) {

            if (hashCount[nums[i]] != undefined) {
                hashCount[nums[i]]++; 
            }
            else {
                hashCount[nums[i]] = 1; 
            }
        }

        let valueCountPairs : [string, number][] = Object.entries(hashCount)
        let freqArray = []
         
         for (let i = 0; i < valueCountPairs.length; i++) {
               const pair = valueCountPairs[i]
               if (freqArray[pair[1]] != undefined) {
                    freqArray[pair[1]].push(Number(pair[0]))
               }
               else {
                     freqArray[pair[1]] = [Number(pair[0])]
               }
         }

         let result = []
          for (let i = freqArray.length-1; i >= 0; i--) {
               if (freqArray[i] == undefined) {continue} 
               else {
                for (let j = 0; j<freqArray[i].length; j++) {
                       result.push(freqArray[i][j]) 
                       if (result.length == k) {
                        return result
                       }
                }
               } 
          }


        return result 

    }
}
