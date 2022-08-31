const arr = [34, 57, 82, 41, 65, 35, 82, 27, 36, 12, 6, 40, 66, 99, 25, 29, 22, 25, 12, 24, 65, 15, 5, 43, 28, 33, 76, 32, 13, 95, 22, 84, 71, 23, 28, 7, 5, 94, 18, 47, 9, 42, 61, 73];

const arr1 = [1,3,5,2,4,6,7,8]

function portion(a, si, ei){
    let pivot = a[si], c = 0
    for (let i = si; i <= ei; i++){
        if (a[i] < pivot){
            c += 1
        }
    }
    [a[si + c], a[si]] = [a[si], a[si + c]]
    let pivot_index = si + c
    let i = si, j = ei
    while(i < j){
        if (a[i] < pivot){
            i += 1
        } else if (a[j] >= pivot){
            j -= 1
        } else {
            [a[i], a[j]] = [a[j], a[i]]
            i += 1
            j -= 1
        }
    }
    return pivot_index
}

function quickSort(a, si, ei){
    if (si >= ei){
        return
    }
    let pivot_index = portion(a, si, ei)
    quickSort(a, si, pivot_index)
    quickSort(a, pivot_index + 1, ei)
    return a;
}

console.log(quickSort(arr1, 0, arr1.length - 1))
console.log(quickSort(arr, 0, arr.length - 1))