class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    
    returnTime(piles: number[], speed): number {
         
         let currTime = 0

         for (let pile of piles) {    
             let time = Math.ceil(pile/speed)
             currTime += time; 
         }

         return currTime; 
    }


    minEatingSpeed(piles: number[], h: number): number {
       
       // hoursallowed >= number of piles 
       // this means: minimum 1 hour given for each pile (no matter how mnay bananas it has) 
      // If I start eating the (max bananas in a pile) / hr: it will take me length of the piles. Max ammount of time that you can take. 

       // [1, 4, 3, 2]
       // uBorder = 4, lBorder = 1, midpoint=2
       //  1  2  2  1  = 6 < h (pass)   so minTime = 2, upperborder = 2 
       //  uBorder = 2, lBorder = 1, midPoint=1 
       //  1  4  3  2  = 10 > h (fail)  so lowerborder = 1 

    
       //[3,6,7,11]
       //uBorder = 11, lBorder= 1,  midpoint=6
       // 1 1 2 2  = 6 < h => minTime = 6; , uBorder= 6 
       // uBorder = 6, lBorder= 1, midpoint = 3 
       // 1 2 3 4  = 10 > h , lBorder = 3 
       // uBorder = 6, lBorder = 3, midpoint = 4 
       // 1 2 2 3  = 8 <= h =>  minTime = 4, uBorder = 4 
       // uBorder = 4, lBorder = 3, midpoint = 3 
       // midpoint == lBorder so break; 
       // 1 2 3 4  = 10 > h , lBorder = 3  





       let maxPile = Math.max(...piles)

       let upperBorder = maxPile;
       let lowerBorder = 1;  

       // 25 - 50 
       // 25+50/2
       // 75/2
       // 38 
       
       let minTime = maxPile; 
       let midPoint =  Math.floor((upperBorder+lowerBorder)/2)
       
       while (true) {
            console.log(upperBorder, midPoint, lowerBorder, minTime )
            if (this.returnTime(piles, midPoint) > h) {
                 if (midPoint == lowerBorder) {
                    break; 
                 }
                 lowerBorder = midPoint
            }
            else if (this.returnTime(piles, midPoint) <= h)
            {    
                if (minTime == midPoint) {
                    break; 
                 }
                 if (midPoint < minTime) {
                    minTime = midPoint;  
                 }
                 upperBorder = midPoint; 
            }
            midPoint = Math.floor((upperBorder+lowerBorder)/2)
       }

       return minTime; 

    }
}
