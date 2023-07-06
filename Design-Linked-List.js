/*
Design Linked List
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

Example 1:

Input
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
Output
[null, null, null, null, 2, null, 3]

Explanation
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
myLinkedList.get(1);              // return 2
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
myLinkedList.get(1);              // return 3
 

Constraints:

0 <= index, val <= 1000
Please do not use the built-in LinkedList library.
At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.
*/

/*
logic:
var MyLinkedList = function()
- the MyLinkedList constructor initializes the linked list object
- it sets the head property to null, indicating an empty linked list
- it also sets the length property to 0 to track the number of nodes in the linked list.

MyLinkedList.prototype.get = function(index)
- the get function retreives the value of the node at the specified index
- it first checks if the index is valid (if it is less than 0 or greater than or equal to the length of the linked list, it returns -1 to indicate an invalid index)
- it then traverses the linked list by following th enext pointers, starting from the head
- the loop runs index times, moving the current pointer to the next node each time
- finally, it returns the value of the node at the specified index

MyLinkedList.prototype.addAtHead = function(val)
- The addAtHead function adds a new node with the given val at the beginning of the linked list
- It creates a new Node instance with the provided val
- it sets the next pointer of the new node to the current 'head' of the linked list
- it then updates the head to point to the new node, making it the new first node
- finally, it increments the length of the linked list

MyLinkedList.prototype.addAtTail = function(val) 
- The addAtTail function adds a new node with the given val at the end of the linked list
- It creates a new Node instance with the provided val
- if the linked list is empty (head is null) it sets the new head to the new node
- Otherwise, it traverses the linked list until it reaches the last node (current.next is null)
- it then sets the next pointer of the last node to the new node, making it the new last node
- finally, it increments the length of the linked list

MyLinkedList.addAtIndex = function(index, val)
- the addAtIndex function adds a new node with the given val at the specified index in the linked list
- It first checks if the index is valid. If its less than 0 or greater than the length of the linked list, it returns without making any modifications
- If the index is 0 it calls the addAtHead function to add the new node at the beginning
- if the index is equal to the length of the linked list it calls the addAtTail function to add the new node at the end
- Otherwise it creates a new Node instance with the provided val
- It then traverses the linked list to reach the node at the index - 1 position
- It updates the pointers to insert the new node between the current node and the next node
- Finally it increments the length of the linked list

MyLinkedList.prototype.deleteAtIndex = function(index)
- The deleteAtIndex function removes the node at the specified index from the linked list
- it first checks if the index is valid. If it's less than 0 or greater than or equal to the length of the linked list, it returns without making any modifications.
- if the index is 0, it updates the head to point to the second node, effectively removing the first node.
- Otherwise it traverses the linked list to reach the node at the index - 1 position
- It updates the pointers to bypass the node at the index position, effectively removing it from the linked list.
- Finally, it decrements the length of the linked list


function Node(val)
- The Node class definition represents a node in the linked list
- Each node has a val property to store the value and a next property to point to the next node.
*/

var MyLinkedList = function() {
    this.head = null;
    this.length = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length) {
        return -1;
    }
    
    let current = this.head;
    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    
    return current.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new Node(val);
    
    if (!this.head) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    
    this.length++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.length) {
        return;
    }
    
    if (index === 0) {
        this.addAtHead(val);
    } else if (index === this.length) {
        this.addAtTail(val);
    } else {
        const newNode = new Node(val);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.length) {
        return;
    }
    
    if (index === 0) {
        this.head = this.head.next;
    } else {
        let current = this.head;
        for (let i =0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
    }
    
    this.length--;
};

function Node(val) {
    this.val = val;
    this.next = null;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */