class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        
        function hasDuplicate(nums : string[]) : boolean {
            const hashSet =  new Set()
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] != ".") {
                    if (hashSet.has(nums[i])) {
                        return true 
                    }
                    else hashSet.add(nums[i])
                }
            }
            return false
        }

        function getBlockIndex(i : number, j: number) : number {
            
            if  (i >= 0 && i < 3) {
                 if (j >= 0 && j < 3) {return 0}
                 if (j >= 3 && j < 6) {return 1}
                 if (j >= 6 && j < 9) {return 2}
 
            }
            else if (i >= 3 && i < 6) {
                 if (j >= 0 && j < 3) {return 3}
                 if (j >= 3 && j < 6) {return 4}
                 if (j >= 6 && j < 9) {return 5}
            }
            else {
                 if (j >= 0 && j < 3) {return 6}
                 if (j >= 3 && j < 6) {return 7}
                 if (j >= 6 && j < 9) {return 8}
            }
         
        }

        let blocks : string[][] = []
         


        for (let i = 0; i < board.length; i++) {
               if (hasDuplicate(board[i])) {
                   return false 
               } 
        }

        for (let j = 0; j<board[0].length; j++) {
            let columnArray = []
            for (let i = 0; i< board.length; i++) {
                columnArray.push(board[i][j])
                const block = getBlockIndex(i, j)
                if (blocks[block] != undefined) {
                     blocks[block].push(board[i][j])
                }
                else {
                    blocks[block] = [board[i][j]]
                }
                
            }

            if (hasDuplicate(columnArray)) {
                return false 
            }
        }

         
         for (let i = 0; i < blocks.length; i++) {
              if (hasDuplicate(blocks[i])) {
                  return false 
              }
         }
        
        return true

    }
}
