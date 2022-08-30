const arr = [34, 57, 82, 41, 65, 35, 82, 27, 36, 12, 6, 40, 66, 99, 25, 29, 22, 25, 12, 24, 65, 15, 5, 43, 28, 33, 76, 32, 13, 95, 22, 84, 71, 23, 28, 7, 5, 94, 18, 47, 9, 42, 61, 73];

// Takes extra space because each time we are slicing the new array
function lastIndex(A, x){
    if (A.length === 0){
        return -1;
    }
    if (A[A.length-1] === x){
        return 0
    } else {
        let result = lastIndex(A.slice(0,A.length-1), x)
        if (result !== -1){
            return A.length - (result + 1) -1
        } else {
            return result
        }
    }
}

console.log(lastIndex(arr, 61))

// No extra space because each time we are passing the index
function lastIndex2(A, x, i){
    if (i === 0){
        return -1;
    }
    if (A[i] === x){
        return i
    } else {
        return lastIndex2(A, x, i-1)
    }
}

console.log(lastIndex2(arr, 61, arr.length-1))

// No extra space because each time we are passing the index
function lastIndex3(A, x){
    if (A.length === 0){
        return -1;
    }
    let result = lastIndex(A.slice(1), x)
    if (result !== -1){
        return result + 1
    } else {
        if (A[0] === x){
            return 0
        } else {
            return -1;
        }
    }
}

console.log(lastIndex3(arr, 61))

// No extra space because each time we are passing the index
function lastIndex4(A, x, i){
    if (A.length === i){
        return -1;
    }
    let result = lastIndex4(A, x, i+1)
    if(result !== -1){
        return result
    } else {
        if (A[i] === x) {
            return i
        } else {
            return -1
        }
    }
}

console.log(lastIndex4(arr, 61, 0))