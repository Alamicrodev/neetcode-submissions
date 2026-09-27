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
        
          
          let cur = head
          let prev = null 

          while (cur != null) {
             
             let next = cur.next 
             cur.next = prev 
             prev = cur
             cur = next 

          }

           return prev 
    }

}
