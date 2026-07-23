class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
     
      const stack : string[] = [] 

      for (let i = 0; i<tokens.length; i++) {
           
           if (['+', '-', '*', '/'].includes(tokens[i])) {
                  const oprB = Number(stack.pop())
                  const oprA = Number(stack.pop())
                  
                  console.log(oprB, oprA)

                  let res = null;  

                  switch(tokens[i]) {
                    case '+': {
                        res = oprA + oprB
                        break;
                    }
                    case '-': {
                        res = oprA - oprB
                        break;
                    }
                    case '*': {
                        res = oprA * oprB
                        break;
                    }
                    case '/': {
                        res = oprA / oprB
                        res = Math.trunc(res)
                    }
                  }
                  stack.push(res.toString())
           }
           else {
              stack.push(tokens[i])
           }
      }

           return Number(stack.pop())

    }
}
