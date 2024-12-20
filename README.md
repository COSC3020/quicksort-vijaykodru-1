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

The time complexity for the implementation is $\Theta(n^2)$. This is because the algorithm iterates over n elements, and in each iteration, it compares the pivot element with the other elements in the array. As a result, the algorithm performs n comparisons for each element, leading to a total time complexity of $\Theta(n^2)$

References: 

https://www.geeksforgeeks.org/javascript-program-for-quick-sort/

The above website gave me good understanding how to implement a recursive version of the quicksort. I implemented mine using a stack instead of recursion

https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/

Visualize how the quicksort works

quicksort-vijaykodru I had to look at my old repository because my test was failing at first. However I wanted to try out how randomly picking the pivot can help and it worked. 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice
