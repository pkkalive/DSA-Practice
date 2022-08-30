 const str = "scaxccsa"

 function replaceChar(s, a, b) {
     if (s.length === 0){
         return s
     }
     let subString = replaceChar(s.slice(1), a, b)
     if (s[0] === a){
         return b + subString
     }
     return s[0] + subString
 }

 console.log(replaceChar(str, 'x', 'c'))