# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The time complexity for the implementation is $\Theta(n^2)$. This is because the code iterates over n elements and at in each iteration it checks that pivot and compares it to n number of elements which leads us to the total time complexity of $\Theta(n^2)$. This type worst case happens if the given array is sorted in reverse. In this type of situation the pivot is set to be the first element in every iteration.


References: 

https://www.geeksforgeeks.org/javascript-program-for-quick-sort/

The above website gave me good understanding how to implement a recursive version of the quicksort. I implemented mine using a stack instead of recursion

https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/

Visualize how the quicksort works