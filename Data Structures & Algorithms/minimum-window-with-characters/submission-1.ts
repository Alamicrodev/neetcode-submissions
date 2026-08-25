class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
         
         let tMap : {[key: string]: number} = {}; 
         let rMap : {[key: string]: number} = {};  
         for (let char of t) {
           tMap[char] = tMap[char]? tMap[char]+1: 1;   
         }
         for (let char of t){
            rMap[char] = 0; 
         }
         let reqMatches = Object.keys(tMap).length; 
         let match = 0; 
         let minLength = Infinity; 
         let subStr = ""; 
         let l = 0; 
         let r = 0; 

         

         while (r < s.length) {
            if (s[r] in rMap) {
                rMap[s[r]]++; 
                if (rMap[s[r]] === tMap[s[r]]) {
                    match++; 
                }
                   while (match == reqMatches) {
                        
                        if (minLength > (r-l)+1) {
                                     subStr = s.substring(l,r+1); 
                                     minLength = (r-l)+1; 
                                } 

                        if (s[l] in rMap) {
                            rMap[s[l]]--; 
                            if (rMap[s[l]] < tMap[s[l]]) {
                               match--; 
                            }
                        }
                        l++;
                   }
            }
            r++; 
         }

          return subStr
    }
}



 