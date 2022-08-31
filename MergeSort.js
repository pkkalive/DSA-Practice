const arr = [34, 57, 82, 41, 65, 35, 82, 27, 36, 12, 6, 40, 66, 99, 25, 29, 22, 25, 12, 24, 65, 15, 5, 43, 28, 33, 76, 32, 13, 95, 22, 84, 71, 23, 28, 7, 5, 94, 18, 47, 9, 42, 61, 73];

const arr1 = [1,3,5,2,4,6,7,8]

function merge(left, right, arr){
    let i = 0, j = 0, k = 0;
    while (i < left.length && j < right.length){
        if (left[i] < right[j]){
            arr[k++] = left[i++]
        } else {
            arr[k++] = right[j++]
        }
    }
    while (i < left.length){
        arr[k++] = left[i++]
    }
    while (j < right.length){
        arr[k++] = right[j++]
    }
    return arr;
}


function mergeSort(A){
    if (A.length === 0 || A.length === 1){
        return A;
    }
    const mid = Math.floor(A.length / 2)
    const leftArray = A.slice(0, mid)
    const rightArray = A.slice(mid)
    return merge(mergeSort(leftArray), mergeSort(rightArray), A)
}

console.log(mergeSort(arr))
console.log(mergeSort(arr1))
