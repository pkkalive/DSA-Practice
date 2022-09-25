/*
    Given an array there is only one unique number and has only two duplicate,
    write a function to return that unique number
    for example A = [1,1,2,2,5,6,6,7,7,8,8] o/p = 5 as it is the only unique number

    A = [1,1,2,2,5,6,6,7,7,8,8]

 */
const A = [1,1,2,2,5,6,6,7,7,8,8]

// The below function take O(n^2) as time complexity
function findUnique(arr){
    const len = arr.length
    let ans = -1
    for (let i = 0; i < len; i++){
        for (let j = 0; j < len; j++){
            if (arr[i] === arr[j] && i !== j){
                break
            }
            if(j === len - 1) {
                ans = arr[i]
            }
        }
    }
    return ans
}

// The below function take O(n) as time complexity but takes extra space complexity of O(n)
function findUnique2(arr){
    const len = arr.length;
    const map = new Map();
    for (let i = 0; i < len; i++){
        map.set(arr[i], map.get(arr[i])+1 || 1)
    }
    for (let i = 0; i < len; i++){
        if(map.get(arr[i]) === 1){
            return arr[i]
        }
    }
    return -1
}

// The below function take O(n) as time complexity and no extra space complexity
function findUnique3(arr){
    const len = arr.length;
    let unique = arr[0]
    for (let i = 1; i < len; i++){
        unique = arr[i] ^ unique
    }
    return unique
}

console.log(findUnique(A))
console.log(findUnique2(A))
console.log(findUnique3(A))
console.log(findUnique4(A))

// Now your challenge is to solve in O(log n) time complexity without any extra space

function findUnique4(arr) {
    let s = 0, e = arr.length - 1;
    while (s <= e) {
        let m = Math.floor((s + e)/2)
        let firstOcc = m
        if (arr[m] !== arr[m - 1] && arr[m] !== arr[m + 1]){
            return arr[m]
        }
        if (arr[m] === arr[m - 1]) {
            firstOcc = m - 1
        }
        if (firstOcc % 2 === 0){
            s = m + 1
        } else {
            e = m - 1
        }
    }
}