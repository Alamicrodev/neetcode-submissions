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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
       
       if (head == null) {
        return head; 
       }
        

       
       let cur = head; 
       let length = 0; 

       while (cur != null) {
            cur = cur.next; 
            length++; 
       }

       let index = length - n; 

       if (index == 0) {
         head = head.next;
         return head; 
       }

       cur = head; 
       let count = 1; 

       while (count < index) {
        cur = cur.next; 
        count++;  
       }



       if (cur != null && cur.next != null) {
           cur.next = cur.next.next; 
       }


       return head; 

    }
}
