class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
         
         const monoStack : [number, number][] = []
         const output : number[] = Array(temperatures.length).fill(0)

         for (let i = 0; i < temperatures.length; i++) {
              
              if (monoStack.length == 0 || monoStack[monoStack.length-1][0] >= temperatures[i]) {
                      monoStack.push([temperatures[i], i])
              }
              else {
                  while (monoStack.length != 0 && monoStack[monoStack.length-1][0] < temperatures[i]) 
                    {
                        const value = monoStack.pop()
                        const idx = value[1]
                        const res = i - idx 
                        output[idx] = res 
                    }
                    monoStack.push([temperatures[i], i])
              }
         }

           return output
    }
}
