a="racecar"

function checkPalidrome(a){
    if (a[0]===a[a.length-1]) return "true" 
    else return "false"
}


console.log(checkPalidrome(a))
console.log(checkPalidrome("abc"))