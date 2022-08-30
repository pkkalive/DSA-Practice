const str0 = "xxxyyyzwwzzz"
const str1 = "aabccbaa"
const str2 = "baabbsbbahsahbahshhbhsjjjj"
const str3 = "tadayutaysgcgtttggytytyyyikk"
const str4 = "CCooddiinnggNNiinnnnjjjjaaaassss"

function removeConsecutiveDuplicates(s){
    if (s.length < 2){
        return s
    }
    if (s[0] === s[1]){
        return removeConsecutiveDuplicates(s.slice(1))
    } else {
        let subString = removeConsecutiveDuplicates(s.slice(1))
        return s[0] + subString
    }
}

console.log(removeConsecutiveDuplicates(str0))
console.log(removeConsecutiveDuplicates(str1))
console.log(removeConsecutiveDuplicates(str2))
console.log(removeConsecutiveDuplicates(str3))
console.log(removeConsecutiveDuplicates(str4))
