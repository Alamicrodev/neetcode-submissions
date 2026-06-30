class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
      
         const groupHash : {[key: string]: string[]} = {}

         for (let i = 0; i < strs.length; i++) {
               
               let sortedStr = strs[i].split("").sort().join("")

               if (groupHash[sortedStr] != undefined) {
                      groupHash[sortedStr].push(strs[i])
               }
               else {
                     groupHash[sortedStr] = [strs[i]]
               }
         }

           const outputArray : string[][] = []
           const groupHashKeys = Object.keys(groupHash)
            for (let i = 0; i < groupHashKeys.length; i++) {
                     outputArray.push(groupHash[groupHashKeys[i]])
            }   
            
         return outputArray

    }
}
