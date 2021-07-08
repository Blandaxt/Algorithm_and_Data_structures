
/* 

Advantages, 

Disadvantages, 

When to use, 

Example

*/

/* 

Linked List

*/

/* 

Definition: 



It is a data structure in which it is a chain of nodes that has a head pointer 
that indicates the first node in the list and each node has a pointer to the
 next node in the chain. 

A node represents an element in linked list which have some data and 
a pointer pointing to next node. 

This type of linked list is called a simple or singly linked list. 
In a singly linked list traversal of the data structure is linear, 
from start to finish and cannot be randomly accessed by an index like 
in an array. Each node is successively accessed from starting at the 
head and working from one node to the next.

*/

/* 

Advantages: 

Dynamic Data Structure
Linked list is a dynamic data structure so it can grow and shrink at runtime 
by allocating and deallocating memeory. So there is no need to give initial 
size of linked list.

Insertion and Deletion

Insertion and deletion of nodes are really easier. Unlike array here we don’t 
have to shift elements after insertion or deletion of an element. In linked 
list we just have to update the address present in next pointer of a node.

No Memory Wastage

As size of linked list can increase or decrease at run time so there is 
no memory wastage. In case of array there is lot of memory wastage, like 
if we declare an array of size 10 and store only 6 elements in it then 
space of 4 elements are wasted. There is no such problem in linked list 
as memory is allocated only when required.

Implementation
Data structures such as stack and queues can be easily implemented 
using linked list.

*/

/*

Disadvantages: 

Memory Usage

More memory is required to store elements in linked list as compared to array.
 Because in linked list each node contains a pointer and it requires extra
  memory for itself.

Traversal

Elements or nodes traversal is difficult in linked list. 
We can not randomly access any element as we do in array by index. 
For example if we want to access a node at position n then we have 
to traverse all the nodes before it. So, time required to access a node is large.

Reverse Traversing

In linked list reverse traversing is really difficult. In case of 
doubly linked list its easier but extra memory is required for back 
pointer hence wastage of memory.

*/

/* 

When to use: 

 You should use a linked list when creating a data structure where you do not 
 need to access any of the data specificaly. And where you just want to add to
 the list and remove from it. 

 We’d use a linked list over an array when we need faster insertion and deletion,
 but we can tolerate slow item retrieval and we’re o.k. with extra space 
 taken up. If we’re space-limited or access speed is important, we’d use an array.

*/



/* Example */

// class Node {

//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {

//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
// }

class LinkedList {
    constructor(...values) {
        this.head = null;
        this.length = 0;
        this.addToHead(...values);
    }
    
    _addSingleItemToHead(value) {
        const newNode = { value };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    addToHead(...values) {
        values.forEach(value => this._addSingleItemToHead(value));
        return this;
    }
    
    removeFromHead() {
        if (this.length === 0) {
            return undefined;
        }
        
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        
        return value;
    }
    
    find(val) {
        let thisNode = this.head;
        
        while(thisNode) {
            if(thisNode.value === val) {
                return thisNode;
            }
            
            thisNode = thisNode.next;
        }
        
        return thisNode;
    }
    
    remove(val) {
        if(this.length === 0) {
            return undefined;
        }
        
        if (this.head.value === val) {
            return this.removeFromHead();
        }
        
        let previousNode = this.head;
        let thisNode = previousNode.next;
        
        while(thisNode) {
            if(thisNode.value === val) {
                break;
            }
            
            previousNode = thisNode;
            thisNode = thisNode.next;
        }
        
        if (thisNode === null) {
            return undefined;
        }
        
        previousNode.next = thisNode.next;
        this.length--;
        return this;
    }
}



let values = new LinkedList('Hello!', 2, 3, {}, [], "We got it!", 99)

console.log("Values: \n", values)

console.log("Values: \n", values.head)

console.log("Values: \n", values.head.next)

console.log("Values: \n", values.head.next.next)

console.log("Values: \n", values.head.next.next.next)

console.log("Values: \n", values.head.next.next.next.next)

// const list = {}

// const list = {
//     head: {
//         value: 12,
//         next: {
//             value: 99,
//             next: {
//                 value: 37,
//                 next: null
//             }
//         }
//     }
// };

// const list = {
//     head: → { value: 12, next: ⤵ }
//             { value: 99, next: ⤵ }
//     tail: → { value: 37, next: ∅ }
// };

/* 

Sources: 

https://medium.com/nerd-for-tech/linked-lists-a-quick-look-into-data-structures-c858b87f9b9b

https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571

https://www.thecrazyprogrammer.com/2016/11/advantages-disadvantages-linked-list.html

https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/

*/