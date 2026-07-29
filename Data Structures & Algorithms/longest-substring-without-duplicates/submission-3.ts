class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
       
       if (s.length == 0) return 0 
       if (s.length == 1) return 1
      
        let i = 0; 
        let j = 1; 
        let maxLength = 0; 
        let mySet = new Set(); 
        mySet.add(s[i]);

        while (j < s.length) {
           while (mySet.has(s[j])) {
            mySet.delete(s[i])
            i++; 
          }

          mySet.add(s[j]); 
          if (mySet.size > maxLength) {
            maxLength = mySet.size; 
          }
          j++
        }
        
        return maxLength
    }
}
