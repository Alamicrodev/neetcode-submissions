class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        
        const alphaCounter : {[ property : string ] : number } = {}
          
         if (s.length != t.length) {
            return false
         }
         

         for (let i = 0; i < s.length; i++) {
              if (alphaCounter[s[i]]) {
                  alphaCounter[s[i]]++; 
              }
              else alphaCounter[s[i]] = 1; 
         }

         for (let i = 0; i < t.length; i++) {
              if (alphaCounter[t[i]] && alphaCounter[t[i]] >= 1) {
                 alphaCounter[t[i]]--; 
              }
              else {
                return false 
              }
         }
      
        return true 
    }
}
