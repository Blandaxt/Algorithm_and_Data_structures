/* 

Advantages, 

Disadvantages, 

When to use, 

Example

*/

/* 

Doubly Linked List

*/

/* 

Definition:

A doubly-linked list is the same as a singly-linked list, except that 
every node has both a next pointer pointing forwards and a pre (previous) 
pointer pointing backwards. This takes more memory to maintain and the 
logic of the methods becomes a little more difficult to reason about.
This allows for traversal in two directions.

*/

/* 

Advantages: 

 Reversing the doubly linked list is very easy.

 It can allocate or reallocate memory easily during its execution.

 As with a singly linked list, it is the easiest data structure to implement.

 The traversal of this doubly linked list is bidirectional which is not possible 
 in a singly linked list.

 Deletion of nodes is easy as compared to a Singly Linked List. A singly 
 linked list deletion requires a pointer to the node and previous node to 
 be deleted but in the doubly linked list, it only required the pointer 
 which is to be deleted.

*/

/* 

Disadvantages: 

 It uses extra memory when compared to the array and singly linked list.
 Since elements in memory are stored randomly, therefore the elements 
 are accessed sequentially no direct access is allowed.

*/

/* Example: */ 

class Node {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }

  /* Push (Adding a node to the end) */

//   push(val) {
//     const newNode = new Node(val);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }

  /* Pop (Removing a node from the end) */

//   pop() {
//     if (this.length === 0) return undefined;
//     const temp = this.tail;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.tail = temp.prev;
//       this.tail.next = null;
//       temp.prev = null;
//     }
//     this.length--;
//     return temp;
//   }

  /* Shift (Removing a node from the beginning) */

//   shift() {
//     if (this.length === 0) return undefined;
//     const temp = this.head;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.head = temp.next;
//       this.head.prev = null;
//       temp.next = null;
//     }
//     this.length--;
//     return temp;
//   }

  /* Unshift (Adding a node to the beginning) */ 

//   unshift(val) {
//     const newNode = new Node(val);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head.prev = newNode;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }

  /* new list */ 

//   let list = new DoublyLinkedList;
//   list.push(1);
//   list.push(2);
//   list.push(3);
//   list.push(4);
//   list.push(5);

/* 

When to use: 

 It is used in the navigation systems where front and back navigation is required.
 It is used by the browser to implement backward and forward navigation of 
 visited web pages that is a back and forward button.

*/

/* 

Sources: 

https://medium.com/nerd-for-tech/linked-lists-a-quick-look-into-data-structures-c858b87f9b9b

https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571

https://www.geeksforgeeks.org/advantages-disadvantages-and-uses-of-doubly-linked-list/

https://betterprogramming.pub/singly-and-doubly-linked-lists-in-javascript-7515f47c9f60

https://javascript.plainenglish.io/doubly-linked-lists-with-javascript-9c20a9dc4fb3
*/