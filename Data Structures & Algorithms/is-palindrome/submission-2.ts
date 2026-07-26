class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s: string): boolean {

       let i = 0; 
       let j = s.length-1; 
       
       function isAlphaNumeric(c: string): boolean {
              
              let code = c.charCodeAt(0); 

              return  ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 93 && code <= 122))

       }
    

       while ( i < j ) {
          
          if (!isAlphaNumeric(s[i])) {
             i++; 
             continue; 
          }

          if (!isAlphaNumeric(s[j])) {
            j--; 
            continue;
          }

          if (s[i].toLowerCase() == s[j].toLowerCase()) {
              i++;
              j--; 
              continue; 
          }
          else {
            return false 
          }
       }
       
       return true; 

    }
}
