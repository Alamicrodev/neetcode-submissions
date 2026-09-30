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
         
        // let nodesSet = new Set<ListNode>; 
        // let curr = head 

        if (head == null) {
            return false 
        }
        
        // while (curr != null) { 
           
        //     if (nodesSet.has(curr)) {
        //         return true
        //     }
            
        //     nodesSet.add(curr); 
        //     curr = curr.next; 

        // }
         
        // return false 
        


        let s = head; 
        let f = head; 
        
        if (s != null && f.next != null) {
            s = s.next; 
            f = f.next.next; 
        }

        while (s != null && f?.next != null) {
            
            if (s == f) {
                return true
            }

            s = s.next
            f = f.next.next 
        }

        return false
    }
}
