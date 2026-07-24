class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
            
          const monoStack : [number, number][]  = []
          let maxArea = 0; 
           
          for (let i = 0; i < heights.length; i++) {
               
               if (monoStack.length == 0 || monoStack[monoStack.length-1][0] < heights[i]) {
                       monoStack.push([heights[i], i])
                   }
               else if (monoStack.length != 0 && monoStack[monoStack.length-1][0] == heights[i]) {
                               let entry = monoStack.pop(); 
                               let [height, sIndex] = entry; 
                               monoStack.push([heights[i], sIndex])
                    }
               else {
                        let lastIndex = i; 
                        
                        while(monoStack.length != 0 && monoStack[monoStack.length-1][0] > heights[i]) {
    
                                let entry = monoStack.pop();  
                                let [height, sIndex] = entry; 
                                let width = i - sIndex; 
                                let area = width * height; 
                                if (area > maxArea) {
                                    maxArea = area; 
                                } 
                                if (sIndex < lastIndex) {
                                    lastIndex = sIndex;
                                } 
                        }
                        monoStack.push([heights[i], lastIndex])
                    }    
          }

          if (monoStack.length != 0) {
             for (let i = 0; i < monoStack.length; i++) {
                  let entry = monoStack[i]; 
                  let [height, sIndex] = entry; 
                  let width = heights.length - sIndex; 
                  let area = width * height; 
                            if (area > maxArea) {
                                maxArea = area; 
                            } 
             }
          }

          return maxArea
         
    }
}
