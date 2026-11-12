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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    
    mergeLists(listA: ListNode | null, listB: ListNode | null) {
       let dummyH = new ListNode()
       let pA = listA
       let pB = listB 
       let pR = dummyH

       while (pA != null && pB != null) {
           if (pA.val <= pB.val) {
               pR.next = pA; 
               pA = pA.next;
               pR = pR.next; 
           }
           else {
               pR.next = pB; 
               pB = pB.next; 
               pR = pR.next;  
           }
       }

       if (pA == null) {
           pR.next = pB
       }
       else 
       {
          pR.next = pA
       }
       
       return dummyH.next; 

    }


    mergeKLists(lists: ListNode[]): ListNode {
        if (lists.length === 0) {
            return null;
        }

        if (lists.length == 1) {
            return lists[0]
        }
       
        
        const mid = Math.floor(lists.length / 2);
        const left = this.mergeKLists(lists.slice(0, mid));
        const right = this.mergeKLists(lists.slice(mid));
        
       
        return this.mergeLists(left, right);


        // let dHead = new ListNode()
        // for(let i=0; i<lists.length; i++) {
        // let mergedHead = this.mergeLists(dHead.next, lists[i])

        //    dHead.next = mergedHead;    
        // }

        // return dHead.next; 


    }

}
