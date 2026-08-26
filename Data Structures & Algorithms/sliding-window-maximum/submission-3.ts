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
        let queueFirstPointer = 0; 
        let resultArray = []; 
    
        
        for (let i = l; i<=r; i++) {
            if (queue.length == 0) {
                queue.push(i)
            }
            else {
                while (nums[i] >= nums[queue[queue.length-1]]) {
                       queue.pop()
                       if (queue.length-1 == queueFirstPointer-1) {
                        break;
                       }
                }
                queue.push(i);
            }
        }
       
        while(r < nums.length) {
             //remove out of bounds elements 
             while (queueFirstPointer < queue.length && l > queue[queueFirstPointer]) {
                queueFirstPointer++; 
             }

             //add new elements 
              while (queue.length > queueFirstPointer && nums[r] >= nums[queue[queue.length-1]]) {
                        queue.pop()
                    
                }
                queue.push(r);

              //push to result array 
               resultArray.push(nums[queue[queueFirstPointer]])

               //increment (move the sliding window)
                l++; 
                r++; 
        }
             
        
        return resultArray
};
}


