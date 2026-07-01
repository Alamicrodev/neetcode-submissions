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

        let result = Object.entries(hashCount).sort(([, valueA], [, valueZ]) => valueZ - valueA).slice(0,k).map((entry) => Number(entry[0]))
        
        return result 

    }
}
