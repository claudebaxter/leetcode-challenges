/*
705. Design HashSet
Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:

void add(key) Inserts the value key into the HashSet.
bool contains(key) Returns whether the value key exists in the HashSet or not.
void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 

Example 1:

Input
["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
[[], [1], [2], [1], [3], [2], [2], [2], [2]]
Output
[null, null, null, true, false, null, true, null, false]

Explanation
MyHashSet myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // return False, (already removed)
 

Constraints:

0 <= key <= 106
At most 104 calls will be made to add, remove, and contains.
logic:
Class MyHashSet:
- Initialize an array (buckets) to store elements
- Initialize a function (hashCode) to compute the hash code of a key

Method add(key):
- Compute the hash code of the key using hashCode function
- Map the hash code to a bucket index
- If there's no chain at the bucket index, create a new chain with the key
- Otherwise, search for the key in the chain
  - If the key is found, return
  - If the key is not found, append it to the chain

Method remove(key):
- Compute the hash code of the key using hashCode function
- Map the hash code to a bucket index
- If there's no chain at the bucket index, return
- Search for the key in the chain
  - If the key is found, remove it from the chain
  - If the key is not found, return

Method contains(key):
- Compute the hash code of the key using hashCode function
- Map the hash code to a bucket index
- If there's no chain at the bucket index, return false
- Search for the key in the chain
  - If the key is found, return true
  - If the key is not found, return false
 */

var MyHashSet = function() {
    this.buckets = [];
};

MyHashSet.prototype.hashCode = function(key) {
    return key;
}

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const index = this.hashCode(key) % this.buckets.length;

    if (!this.buckets[index]) {
        this.buckets[index] = [];
    }

    const chain = this.buckets[index]
    for (const value of chain) {
        if (value === key) {
            return
        }
    }

    chain.push(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const index = this.hashCode(key) % this.buckets.length;

    const chain = this.buckets[index];
    if (!chain) {
        return;
    }

    const keyIndex = chain.findIndex((value) => value === key);
    if (keyIndex >= 0) {
        chain.splice(keyIndex, 1);
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const index = this.hashCode(key) % this.buckets.length;
    
    const chain = this.buckets[index];
    if (!chain) {
        return false;
    }

    for (const value of chain) {
        if (value === key) {
            return true;
        }
    }

    return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */