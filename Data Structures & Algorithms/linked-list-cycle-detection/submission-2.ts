/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {

        if (head == null) {
            return false 
        } 
        
        //______ hashSet Solution ___________

        // let nodesSet = new Set<ListNode>; 
        // let curr = head 
        
        // while (curr != null) { 
           
        //     if (nodesSet.has(curr)) {
        //         return true
        //     }
            
        //     nodesSet.add(curr); 
        //     curr = curr.next; 

        // }
         
        // return false 
        

        // __________ Floy's Tourtoise Algorithm ________
       
        let s = head;  //slow 
        let f = head;  //fast

        while (f != null && f.next != null) {
            
            s = s.next
            f = f.next.next 

            if (s == f) {
                return true
            }
  
        }

        return false
    }
}
