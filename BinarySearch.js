const arr = [1, 3, 5, 7, 9, 11, 13, 15, 16, 17]

function binarySearch(a, x, si, ei){
    if (si > ei){
        return -1
    }
    let mi = Math.floor((si + ei)/2)
    if (a[mi] === x){
        return mi;
    }
    else if (a[mi] > x){
        return binarySearch(a, x, si,mi - 1)
    } else {
        return binarySearch(a, x, mi  + 1, ei)
    }
}

console.log(binarySearch(arr, 3, 0, 9))
console.log(binarySearch(arr, 2, 0, 9))
console.log(binarySearch(arr, 16, 0, 9))
