class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
      const groupHash: {[key: string]: string[]} = {}
       
       for (let i = 0; i < strs.length ; i++) {
            
            let str = strs[i];
             // array of 26 characters all of them being 0s.
            let key: number[] = Array(26).fill(0)  
                
            //going through each char in str and updating the key accordingly
            for (let j = 0; j < str.length; j++) {
                    const index = str[j].charCodeAt(0) - 'a'.charCodeAt(0)

                    let keyCount = key[index]
                        keyCount++; 

                    key[index] = keyCount  //update value
            }

            if (groupHash[key.join(",")] != undefined) {
                groupHash[key.join(",")].push(str)
            }
            else {
                groupHash[key.join(",")] = [str]
            }
        
        }

        const outputArray : string[][] = []
        const groupHashKeys = Object.keys(groupHash) //go through all keys and push to output array
        for (let i = 0; i < groupHashKeys.length; i++) {
                     outputArray.push(groupHash[groupHashKeys[i]])
            }   

            return outputArray
}

}