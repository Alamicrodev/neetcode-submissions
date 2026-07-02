class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
         let res = ""
         for (let i = 0; i< strs.length; i++) {
             res += (strs[i].length).toString() + "#" + strs[i]
         }
        return res; 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
          
          const strArray : string[] = []
          let i = 0;
          while (i<str.length) {      
                let j = i;             
                while (str[j] != "#"){
                    j++; 
                }   
                let length = Number(str.substring(i,j))
                let strElement = str.substring(j+1, j+1+length)
                strArray.push(strElement)
                i = j+1+length
          }

         return strArray
    }
}
