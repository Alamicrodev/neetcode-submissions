class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
     
    //  [3,4,5,6,1,2]
    //  N-1 > n we are looking for this number 
    //  going iteratively starting from index 1 won't work because it will make solution O(n) in worst case. 
    // so how do we find the number ?
    // binary search?? but its not sorted (let's see)
    // [1, 2, 3, 4, 5, 6]   original order 
   
    // [6, 1, 2, 3, 4, 5]
    //  middle = 2, if number before 5 is greater than 5(great return 5)
    //if not and if not then we check the left half 
      
    //base case because it means rotated  n times
    if (nums[0] <= nums[nums.length-1]) {
        return nums[0] 
    }
         
     // [3, 4, 5, 6, 1, 2]
     //           l  
     //           r
     //           m


    let left = 0; 
    let right = nums.length-1
    let mid = Math.floor(0+(nums.length-1)/2) 
    let prevMid = null; 
 
    while(left != right) {
        console.log(nums[left], nums[mid], nums[right])
        if (nums[mid] > nums[left]) {
             left = mid
            //  prevMid = mid
             mid = (Math.floor((left+right)/2))
        }
        else {
            right = mid
            // prevMid = mid
            mid = (Math.floor((left+right)/2)) 
        }
    }
    
    return nums[mid+1]

    }

}