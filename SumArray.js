const arr = [34, 57, 82, 41, 65, 35, 82, 27, 36, 12, 6, 40, 66, 99, 25, 29, 22, 25, 12, 24, 65, 15, 5, 43, 28, 33, 76, 32, 13, 95, 22, 84, 71, 23, 28, 7, 5, 94, 18, 47, 9, 42, 61, 73]

// creates extra space
function sumArray(A){
    let sum = 0;
    if (A.length === 0){
        return sum;
    }
    sum += A[A.length -1]
    A.length--
    return sum + sumArray(A);
}
console.log(sumArray(arr))

// No extra space is taken
function sumArray2(A, i){
    if (A.length === i){
        return 0;
    }
    return A[i] + sumArray2(A, i+1);
}

console.log(sumArray2(arr, 0))