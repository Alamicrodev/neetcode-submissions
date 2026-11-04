class ListNode {
    prev : ListNode | null
    next : ListNode | null
    val : number | null
    key : number | null 

    constructor() {
        this.prev = null
        this.next = null
        this.val = null
        this.key = null 
    }

}


class LRUCache {
    /**
     * @param {number} capacity
     */
    map 
    capacity : number
    prehead : ListNode
    aftail : ListNode

    constructor(capacity: number) {
           this.map = new Map<number, ListNode>(); 
           this.capacity = capacity 
           this.prehead = new ListNode()    //dummy 
           this.aftail = new ListNode()    //dummy 

           this.prehead.next = this.aftail; 
           this.aftail.prev = this.prehead; 

    }

    /**
     * @param {number} key
     * @return {number}
     */
    
    removeNode(node : ListNode) {
        
        let prev = node.prev!; 
        let next = node.next!; 

        prev.next = next;
        next.prev = prev; 

        return node; 
    }
    
    addToHead(node : ListNode) {
        
        let oldHead = this.prehead.next!;

        this.prehead.next = node;  
        node.prev = this.prehead; 

        node.next = oldHead;  
        oldHead.prev = node; 

    }



    get(key: number): number {
        // return -1 if key does not exist 
         if (!this.map.has(key)) {
             return -1 
         }
         
         //get the node 
         let pNode = this.map.get(key)

         //we have to move this pNode to the head
         this.removeNode(pNode);
         this.addToHead(pNode);

         //return the value
         return pNode.val; 
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        //if key not already in hashmap 
        if (!this.map.has(key)) {
            
            //create New Node add to head 
            let maNode = new ListNode()
            maNode.val = value; 
            maNode.key = key; 
            
            //add to hashmap 
            this.map.set(key, maNode)

            //place at head 
            this.addToHead(maNode); 
 
        }

        //if key already in hashmap 
        if (this.map.has(key)){
            //retrieve the node and update its value 
            let maNode = this.map.get(key)
            maNode.val = value; 
            
            //remove node from list 
            this.removeNode(maNode)

            //add to head 
            this.addToHead(maNode) 
        }

        //if mapsize has become greater than capacity, then we remove the tail node. 
        if (this.map.size > this.capacity) {
            let curtail = this.aftail.prev; 
            let key = curtail.key; 
            let pretail = curtail.prev; 
            pretail.next = this.aftail;
            this.aftail.prev = pretail; 
            
            //remove from hashmap too 
            this.map.delete(key)
        }
    }
}


// what if i use a hashmap which stores the key with a pointer to the node which stores the value, right? 
//and then the nodes are actually connected in a linkedlist, whenever a node is accessed its simply becomes the head of the linkedlist and everything else is moved forward. 
//when a new node is added the node in the tail is removed and new node becomes the head. 

//the problem? hashmap should not be there 
//if so how am i gonna get the value in O(1) time? 

//overall space of O(n) where n is the capacity of the LRU cache. 
//so clearly a hasmap is not possible here 


