# AVL Tree

AVL tress is a self-balancing Binary Search Tree (BST) where the difference between heights of left and right subtrees cannot be more than one for all nodes.

__EXAMPLE:__

``` JavaScript
// THIS IS AN AVL TREE
//          12
//        /   \
//       8     18
//     / \    /
//    5   11  17   
//   /  
//  4
// THIS IS A NOT AN AVL TREE
//            12
//          /   \
//         8     18
//       / \    /
//      5   11  17   
//     / \
//    4   7
//   /  
//  2
```

## Left Rotation
Let's work with this problem. As you can see below this is not an AVL tree.
``` JavaScript
// THIS IS AN AVL TREE
//          4 (1 left child deep and 3 right children deep)
//        /   \
//       2     8 <- violation (0 left child deep and 2 right children deep)
//              \
//              10 (0 left child deep and 1 right child deep)
//               \
//               12 <- problem
```

Solution is to rotate the grandparent of the problem. We will do a left rotation of the "8".
``` JavaScript
//            4
//          /   \
//         2     10 <- after left rotating the "8", "10" takes it's place
//              /  \
//             8   12
```


## Right Rotation
How about another example:
``` JavaScript
//            10
//          /   \
//         8     12   
//       /   (We can see that the 8 is violation, and 2 is the problem)
//      4      
//     /
//    2   
```
Solution is to rotate the grandparent of the problem. We will do a right rotation of the "8".
``` JavaScript
//            10
//          /   \
//         4     12   
//       /  \
//      2    8  
```

## Complicated Example
``` JavaScript
//            4
//          /   \
//         2     10 <- after left rotating the "8", "10" takes it's place
//              /  \
//             8   12
```

Let's add a 9! This is tricky! There will be a left rotation of the parent and then following a right rotation of the grandparent.
``` JavaScript
//            4
//          /   \
//         2     10
//              /  \
//             8   12
//              \
//               9
```

1. Left rotate the parent ("8")
``` JavaScript
//            4
//          /   \
//         2     10
//              /  \
//             9   12
//            /
//           8
```

2. Right rotation of the (prev) grandparent ("10")
``` JavaScript
//            4
//          /   \
//         2     9
//              /  \
//             8   10
//                  \
//                  12
```

HOWEVER.. the tree isn't balanced. Sometimes the rotation will cause issues in the above tree.
``` JavaScript
//            4 <- violation of rules
//          /   \
//         2     9 <- temporary pointer
//              /  \
//             8   10
//                  \
//                  12
```
1. Temporary pointer to the right node.
2. Set the right node of the violator to be the temporary's pointer left value.
3. Replace the left value of the temporary pointer with the violating node.

``` JavaScript
//            4 <- violation of rules
//          /   \
//         2    8   <- new right value is set to the left value of temporary pointer.
//  
//      9 <- temporary pointer
//     /  \
//    8   10
//         \
//         12
```

``` JavaScript
//      9 <- temporary pointer (replaced temporary pointer's left value with violator)
//     /  \
//    4    10
//  /   \    \
// 2    8    12
```
