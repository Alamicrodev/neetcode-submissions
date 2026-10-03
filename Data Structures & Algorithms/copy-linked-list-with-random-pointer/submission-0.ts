// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {

    //   @param {Node} head
    //   @return {Node}
     
    copyRandomList(head: Node | null): Node {
          
          const oldToNewList = new Map<Node, Node>(); 
          let curr = head; 

          if (curr == null) {
            return null ; 
          } 

          while (curr != null) {

              let newNode = new Node(); 
              newNode.val = curr.val; 
              newNode.next = null; 
              newNode.random = null; 

              oldToNewList.set(curr, newNode)

              curr = curr.next;
          }

          curr = head; 

          while (curr != null) {   
            let newNode = oldToNewList.get(curr); 
            newNode.next = oldToNewList.get(curr.next)?? null; 
            newNode.random = oldToNewList.get(curr.random)?? null; 

            curr = curr.next; 
          }

          let newHead = oldToNewList.get(head); 

          return newHead; 
    }
}
