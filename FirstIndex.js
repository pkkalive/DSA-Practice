const arr = [34, 57, 82, 41, 65, 35, 82, 27, 36, 12, 6, 40, 66, 99, 25, 29, 22, 25, 12, 24, 65, 15, 5, 43, 28, 33, 76, 32, 13, 95, 22, 84, 71, 23, 28, 7, 5, 94, 18, 47, 9, 42, 61, 73];

// Takes extra space because each time we are slicing the new array
function findIndex(A, x){
    if (A.length === 0){
        return -1;
    }
    if (A[0] === x){
        return 0
    } else {
        let result = findIndex(A.slice(1), x)
        if (result !== -1){
            return result + 1
        } else {
            return result
        }
    }
}

console.log(findIndex(arr, 61))

// No extra space because each time we are passing the index
function findIndex2(A, x, i){
    if (A.length === i){
        return -1;
    }
    if (A[i] === x){
        return i
    } else {
        return findIndex2(A, x, i+1)
    }
}

console.log(findIndex2(arr, 61, 0))