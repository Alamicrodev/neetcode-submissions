class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
       
       let tHash : {[key: string]: number} = {}
       let rHash : {[key: string]: number} = {}
       for (let char of t) {
          tHash[char] = tHash[char] != undefined? tHash[char]+1: 1
          rHash[char] = 0;  
       }
       let reqMatches = Object.keys(tHash).length; 
       let matches = 0; 
       let subStr = ""; 
       let minLength = Infinity; 
       let l = 0; 
       let r = 0; 

       while (r < s.length) {
           //add right pointer 
           if (s[r] in rHash) {
              rHash[s[r]]++; 
              if (rHash[s[r]] == tHash[s[r]]) {
                  matches++; 
              }

              //start decreasing window from left pointer
              while (matches === reqMatches) {
                  if (minLength > (r-l)+1) {
                     subStr = s.substring(l, r+1); 
                     minLength = (r-l)+1
                  }
                  if (s[l] in rHash) {
                    rHash[s[l]]--; 
                    if (rHash[s[l]] < tHash[s[l]]) {
                        matches--; 
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



 