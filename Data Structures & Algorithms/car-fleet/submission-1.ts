class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
          
         let carsArray : [number, number][] = []
         
         for (let i = 0; i < position.length; i++) {
            carsArray.push([position[i], speed[i]])
         }

         carsArray.sort((carA, carZ) => carA[0]-carZ[0])

          
         const resultStack : [number, number, number][] = []

         for (let i = carsArray.length-1; i >= 0; i--) {

              let reachin = (target - carsArray[i][0])/carsArray[i][1]  

              if (resultStack.length == 0 || resultStack[resultStack.length-1][2] < reachin) {
                
                resultStack.push([...carsArray[i], reachin]);

              }
         }
          
         return resultStack.length;

    }
}
