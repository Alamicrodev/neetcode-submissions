class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
       
       if (s.length == 0) {
        return 0; 
       }

       const mySet = new Set()

       let l = 0; 
       let r = 1; 
       mySet.add(s[l]);
       let maxLength = 1; 

       while (r < s.length) {
           if (mySet.has(s[r])) {
                mySet.delete(s[l])
                l++; 
                continue; 
           }
           else {
              mySet.add(s[r])
              r++; 
           }
           if (mySet.size > maxLength) {
             maxLength = mySet.size
           }
       }


      return maxLength; 

    } 
}
