class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        
        let l = 0; 
        let r = k-1; 
        let queue = []; 
        let resultArray = []; 
        
        for (let i = l; i<=r; i++) {
            if (queue.length == 0) {
                queue.unshift(i)
            }
            else {
               let j = 0; 
                while (queue[j] != undefined && nums[i] < nums[queue[j]]) {
                        j++; 
                }
                queue[j] = i;
                queue.splice(j+1);
            }
        }
       
        while(r < nums.length) {
             //remove out of bounds elements 
             while (l > queue[0]) {
                queue.shift()
             }

             //add new elements 
              let j = 0;  
              while (nums[r] < nums[queue[j]]) {
                        j++; 
                }
                queue[j] = r;
                queue.splice(j+1);

              //push to result array 
               resultArray.push(nums[queue[0]])

               //increment (move the sliding window)
                l++; 
                r++; 
        }
             
        
        return resultArray
    }
}


