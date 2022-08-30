const str = "apibpipicpidefpigppi"

function replacePI(s){
    if (s.length === 0 || s.length === 1){
        return s;
    }
    if (s[0] === 'p' && s[1] === 'i'){
        let subString = replacePI(s.slice(2))
        return '3.14' + subString
    } else {
        let subString = replacePI(s.slice(1))
        return s[0] + subString
    }
}

console.log(replacePI(str))
