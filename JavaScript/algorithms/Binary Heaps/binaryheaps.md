# Binary Heaps

A heap is a specific tree based data structure in which all the nodes of the tree are in a specific order. There can be a number of children, but the most commonly used heap is a binary heap (where there are at most 2 children).

In a binary heap, if the heap is a complete binary tree with N nodes, then it has smallest possible height which is log<sub>2</sub>N.

A heap is a binary tree with two special properties:
1. It must have all of the nodes in a specific order - the parent nodes must either be greater than or equal to the value of the children nodes, or less than or equal to the value of its children nodes. This is called the __heap-order property__.
2. The shape must be complete (complete tree) - In other words, one entire level of nodes, must all have children added to them before they can have grandchildren nodes.

Heaps are great and super efficient ways of representing __priority queues__. Binary heaps are super efficient for implementing priority queues because it's very easy to know and retrieve/remove the element with the highest priority: it will always be the root node!

Important notes:
1. We can always have duplicate values in a heap - there's no restriction against it.
2. A heap doesn't follow the rules of a binary search tree; the left node doesn't have to be smaller than the right node.

## Min Heap

 * Root node is the smallest or equal to all of the children nodes(always the minimum)

### Insertion

* Top to bottom and from left to right
* Insert the element there and then bubble up until all rules are followed in the __heap-order property__.

### Removing the minimum element

* Take the minimum out
* Switch spots of the minimum with the last element that is added.
* Go down the tree until the tree property is restored

### Implementation

* Use an array to get to the left and right
* We do not need a node class
* parent = Math.floor((index - 1) / 2)
* index = index
* leftChild = (2 * index) + 1
* rightChild = (2 * index) + 2


## Max Heap

* Root node is always greater than or equal to the value of its children nodes.

Binary heap as a method to store a collection of objects in such a way that the smallest element can be quickly found.

* Uses a tree data structure.
