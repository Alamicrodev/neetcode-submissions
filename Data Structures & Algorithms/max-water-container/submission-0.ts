class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
      
      let i = 0; 
      let j = heights.length-1; 
      let maxWater = 0; 

      while (i < j) {
          let minheight = heights[i] < heights[j]? heights[i] : heights[j]; 
          let width = j - i; 
          let currWater = minheight*width; 

          if (currWater > maxWater) {
            maxWater = currWater; 
          }

          if (heights[i] < heights[j]) {
              i++; 
              continue; 
          }
          else if (heights[j] < heights[i]) {
               j--;
               continue;
          }
          else {
             i++; 
             continue; 
          }
      }


      return maxWater; 
    }
}
