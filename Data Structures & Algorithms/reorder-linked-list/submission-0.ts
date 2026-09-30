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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
       
       if (head == null) {
          return 
       }

       //separate the two halves 
       let s = head;       //slow
       let f = head.next;  //fast

       while (f != null && f.next != null) {
            s = s.next; 
            f = f.next.next; 
       }   

       //s is at the last node of the first half
       let halfListHead = s.next; 
       s.next = null;

       //reverse the 2nd half 
       let curr = halfListHead; 
       let prev = null 

       while (curr != null) {
         let next = curr.next; 
         curr.next = prev; 
         prev = curr; 
         curr = next; 
       } 
       

       //go through each  in new list  
       let a = head;
       let b = prev; 
       
       let cur = new ListNode();
       let base = cur; 

       while (a != null && b != null) {
           cur.next = a;
           a = a.next; 
           cur = cur.next;  
           cur.next = b; 
           b = b.next; 
           cur = cur.next
       }

       if (a != null) {
          cur.next = a;
       }
       
       if (b != null) {
         cur.next = b; 
       }
        
       

       head = base.next; 
    }
}
