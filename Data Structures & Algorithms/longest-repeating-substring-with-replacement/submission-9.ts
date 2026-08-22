class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        
        if (s.length == 0) {
            return 0
        }

        let charHash : {[key: string]: number} = {}
        let maxLength = 1; 
        let l = 0; 
        charHash[s[l]] = (charHash[s[l]] || 0) + 1;  
        let r = 1; 
     
        
        while (r < s.length) {
             if ( (r-l) - (Math.max(...Object.values(charHash))) > k) {
                charHash[s[l]] = (charHash[s[l]] || 0) - 1; 
                l++; 
                continue; 
             }
             else {
                
                if ((r-l) > maxLength) {
                    maxLength = r-l;
                }
                charHash[s[r]] = (charHash[s[r]] || 0) + 1; 
                r++; 
             }
        }

          if ( (r-l) - (Math.max(...Object.values(charHash))) <= k &&   (r-l) > maxLength) {
              maxLength = r-l; 
          }


        return maxLength
    }
}
