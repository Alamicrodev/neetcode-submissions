class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        
          const myStack : string[] = []
          const matchMap : { [key : string]: string } = 
          { ")" : "(", 
            "]" : "[",
            "}" : "{" }
       
             for (let i = 0; i< s.length; i++) {
                   
                   if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
                       myStack.unshift(s[i])
                   }
                   else {
                        
                        if (myStack[0] == matchMap[s[i]] ) {
                            myStack.shift(); 
                        }
                        else {
                            return false
                        }
                   }
             }

             if (myStack.length != 0) {
                return false 
             }

           return true 
    }
}
