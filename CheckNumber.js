const arr = [34, 57, 82, 41, 65, 35, 82, 27, 36, 12, 6, 40, 66, 99, 25, 29, 22, 25, 12, 24, 65, 15, 5, 43, 28, 33, 76, 32, 13, 95, 22, 84, 71, 23, 28, 7, 5, 94, 18, 47, 9, 42, 61, 73];

function checkNumber(arr, x) {
    if (arr.length === 0) {
        return false
    } else {
        let key = arr.shift()
        if (key === x) {
            return true
        } else {
            return checkNumber(arr, x)
        }

    }
}
console.log(checkNumber(arr, 61))