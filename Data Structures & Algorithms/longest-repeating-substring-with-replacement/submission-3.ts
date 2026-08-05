class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {

        let i = 0; 
        let j = 0; 

        let charHash = {}
        let maxCharCount = 1; 
        let res = 0; 
         

        while (j < s.length) { 
             if (charHash[s[j]]) {
                charHash[s[j]]++; 
                if (charHash[s[j]] > maxCharCount) {
                    maxCharCount = charHash[s[j]]
                }
               }
               else {
                   charHash[s[j]] = 1; 
               }
            if ((j-i+1)-maxCharCount <= k) {
                if (res < (j-i+1)) {
                    res = j-i+1; 
                } 
            }
            else {
                charHash[s[i]]--; 
                i++;
            }
            
               j++;

        } 
         
        return res
    }
}
