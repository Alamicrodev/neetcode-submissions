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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {

           let cur1 = l1; 
           let cur2 = l2; 

           let carry = 0 
           let dummyHead = new ListNode()
           let prev = dummyHead; 

           while (cur1 != null || cur2 != null) {
                let sum = (cur1?.val ?? 0) + (cur2?.val ?? 0) + carry;
                carry = 0;  
                if (sum > 9) {
                    carry = 1;
                    sum = sum % 10;  
                }

                let node = new ListNode(); 
                node.val = sum; 
                node.next = null; 
                prev.next = node; 
                prev = node; 

                cur1 = cur1?.next ?? null; 
                cur2 = cur2?.next ?? null; 
           }

           //add last carry 
           if (carry != 0) {
              let node = new ListNode(); 
                node.val = carry; 
                node.next = null; 
                prev.next = node; 
           }

           return dummyHead.next
    }
}
