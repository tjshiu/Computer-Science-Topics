# Binary Heaps

## Min Heap

 * Root node is the smallest (always the minimum)

### Insertion

* Top to bottom and from left to right
* Insert the element there and then bubble up until

### Removing the minimum element

* Take the minimum out
* Switch it with the last element that is added.
* Go down the tree until the tree property is restored

### Implementation

* Use an array to get to the left and right
* We do not need a node class
* parent = (index - 2) / 2
* index = index
* leftChild = (index * 2) + 1
* rightChild = (index * 2) + 2


## Max Heap

Binary heap as a method to store a collection of objects in such a way that the smallest element can be quickly found.

* Uses a tree data structure.
