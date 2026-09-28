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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
      
      let curr1 = list1; 
      let curr2 = list2; 
      let curr = null;    
      
      if (curr1 == null && curr2 == null) {
        return curr; 
      }
      else if (curr1 == null) {
        return curr2; 
      }
      else if (curr2 == null) {
        return curr1; 
      }
      
      if (curr1.val >= curr2.val) {
        curr = curr2; 
        curr2 = curr2.next
      }
      else {
        curr = curr1;
        curr1 = curr1.next 
      }

      let head = curr; 
        
      while (curr1 != null && curr2 != null) {
         
         if (curr1.val >= curr2.val) {
            curr.next = curr2 
            curr2 = curr2.next; 
         }
         else {
            curr.next = curr1
            curr1 = curr1.next 
         }

         curr = curr.next 
      }

        while (curr1 == null && curr2 != null) {
            curr.next = curr2 
            curr2 = curr2.next; 
            curr = curr.next; 
        }

        while (curr2 == null && curr1 != null) {
            curr.next = curr1; 
            curr1 = curr1.next; 
            curr = curr.next; 
        }
      
      return head 

    }
}
