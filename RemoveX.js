const str = "pxxp"

function removeX(s) {
    if (s.length === 0){
        return s;
    }
    let subString = removeX(s.slice(1))
    if (s[0] !== 'x'){
        return s[0] + subString
    } else {
        return "" + subString
    }
}

console.log(removeX(str))