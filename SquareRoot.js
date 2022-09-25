/*
    Find Square root of a number or tell the number has perfect square or not
    for example let's take n = 25
    then 5 * 5 = 25 so, it is a perfect square, and we return 5
    for example let's take n = 18
    it doesn't have perfect square, so we return -1
 */

// The below function takes O(n) as time complexity
function squareRoot(n){
    for (let i = 0; i <= n; i++){
        if ((i * i) === n){
            return i;
        }
    }
    return -1
}

// The below function takes O(√n) [Square root of n] as time complexity
function squareRoot2(n){
    for (let i = 0; i * i <= n; i++){
        if ((i * i) === n){
            return i;
        }
    }
    return -1
}

// Now your challenge is to solve in O(log n) time complexity

function squareRoot3(n){
    let si = 0, ei = n;
    while (si < ei) {
        let mi = Math.floor((si + ei)/2)
        if (mi * mi === n){
            return mi
        } if (mi * mi > n){
            ei = mi - 1
        } else {
            si = mi + 1
        }
    }
}

console.log(squareRoot(25))
console.log(squareRoot2(25))
console.log(squareRoot3(25))

