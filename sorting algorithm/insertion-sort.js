function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1;
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}

console.log(insertionSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9]
console.log(insertionSort([9,7,5,4,3,1])); //[1, 3, 4, 5, 7, 9]
console.log(insertionSort([1,2,3,4,5,6])); //[1, 2, 3, 4, 5, 6]
