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
     * @param {number} k
     * @return {ListNode}
     */

    

    reverseKGroup(head: ListNode | null, k: number): ListNode {
       
        let lastHead = new ListNode()
            // 3        1          4 
        let [newHead, prevHead,  nextHead]  = this.reverseLinkedList(head, k)
        let newBase = newHead; 
        lastHead.next = newHead 
        lastHead = prevHead; 
        
        


        while (nextHead != null )  
        //fuckin stupid thing that I am checking it this way but you
        // should not do it like that
        //this probably may not even work 
        {
           let dummy = nextHead 
           let copyK = k
           while ( dummy != null && copyK > 0) {
                dummy = dummy.next; 
                copyK--; 
            }
            if (dummy == null && copyK > 0) {
                break; 
            }

            [newHead, prevHead,  nextHead]  = this.reverseLinkedList(nextHead, k)
            lastHead.next = newHead 
            lastHead = prevHead; 
        }

        lastHead.next = nextHead; 

        return newBase
          
    }


    reverseLinkedList(head: ListNode | null, k:number): ListNode[] {
         let prev = null; 
         let curr = head; 
         let next = null; 
         
         while (curr!= null && k>0) {   // k = 3, decrease k by 1 , 
             next = curr.next; 
             curr.next = prev; 
             prev = curr;
             curr = next; 
             k--;
         } 

         //[newHead, oldHead, nextHead]
         return [prev, head, curr]
    }

    
    //null  <-   5      3   -> 2 -> 8 -> 4 
    //          prev   curr    next
      // next  = curr.next    //when k = 0, make curr nextHead 
      // curr.next = prev     //ignore(to null) when k = 0 then reset k = 2
      // prev = curr 
      // curr = next 
    
    // 1
    // null <-  1   <-   2   <-   3    null <- 4   <-   5   ->   6 -> 7 -> 8
    //                                                 prev    curr     
    //         head 
    // 
   
   //I mean this should work, hell yeahhh lets see 
}
