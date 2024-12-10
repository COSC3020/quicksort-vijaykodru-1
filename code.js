function quicksort(array) {
    //If the array has less than or equal to 1 element
    if (array.length <= 1) {
        return array;
    }

    // This is a way to do recursion without actually doing it
    const stack = [];
    stack.push(0, array.length - 1);

    // Process the stack until all subarrays are sorted
    while (stack.length > 0) {
        const high = stack.pop(); // Get the upper bound of the subarray
        const low = stack.pop(); // Get the lower bound of the subarray

        if (low < high) {
            // Partition the subarray and get the pivot index
            const pivotIndex = partition(array, low, high);

            // Push left subarray bounds onto the stack if it exists
            if (pivotIndex - 1 > low) {
                stack.push(low);
                stack.push(pivotIndex - 1);
            }

            // Push right subarray bounds onto the stack if it exists
            if (pivotIndex + 1 < high) {
                stack.push(pivotIndex + 1);
                stack.push(high);
            }
        }
    }
    return array;
}

function partition(array, low, high) {
    // Choose a random pivot to avoid worst-case performance on already sorted/duplicate arrays
    const pivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;
    const pivotValue = array[pivotIndex];
    
    // Swap the pivot with the first element
    [array[low], array[pivotIndex]] = [array[pivotIndex], array[low]];

    let pivot = low; // Start pivot at the low index

    // Iterate through the array from low + 1 to high
    for (let i = low + 1; i <= high; i++) {
        // If the current element is smaller than the pivot element
        if (array[i] < pivotValue) {
            pivot++; // Move the pivot position forward
            // Swap the current element with the element at the pivot position
            [array[pivot], array[i]] = [array[i], array[pivot]];
        }
    }

    // Swap the pivot element with the element at the final pivot position
    [array[low], array[pivot]] = [array[pivot], array[low]];
    return pivot; // Return the final position of the pivot
}
