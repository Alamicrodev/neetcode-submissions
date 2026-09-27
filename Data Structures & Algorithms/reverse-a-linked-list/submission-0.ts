/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// class ListNode{
//      val: number; 
//      next: ListNode; 

//     constructor (val = 0, next = null) {
//               this.val = val; 
//               this.next = next; 
//     }
// }

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
         
         if (head == null || head.next == null) {
            return head;
         } 

         let prev = head
         let cur = head.next
         head.next = null; 
         let next = null;  

         while (cur != null) {
               
               next = cur.next 
               cur.next = prev 
               prev = cur
               cur = next
         }

         head = prev; 

         return head; 

    }
}
