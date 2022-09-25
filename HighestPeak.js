/*
    Find the highest peak in the given array
    for example A = [1,3,8,4,2] o/p = 8 as 8 is the maximum

    A = [1,2 3,4,8]
    o/p == 8
    highest number a[lastIndex]

     A = [1,3,8,5,6,7,2]
     o/p == 8
     highest number
 */

const A = [1,3,8,5,6,7,2]
// The below function takes O(n) as time complexity
function highestPeak(arr) {
    let max = -Infinity // or max = arr[0]
    for (let num of arr){
        max = Math.max(max, num)
    }
    return max
}

// Now your challenge is to solve in O(log n) as time complexity

function highestPeak1(arr){
    let si = 0, ei = arr.length - 1
    while (si <= ei){
        let mi = Math.floor((si + ei) / 2)
        if(arr[mi] >= arr[mi + 1] && arr[mi] >= arr[mi - 1]){
            return arr[mi]
        }
        if(arr[mi] > arr[mi - 1]){
            si = mi + 1
        } else{
            ei = mi - 1;
        }
    }
}

console.log(highestPeak(A))
console.log(highestPeak1(A))