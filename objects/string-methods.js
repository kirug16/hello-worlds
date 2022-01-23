 /*
let name = '  Kirubel   '

// length property
console.log(name.length)

// convert to uppercase
console.log(name.toUpperCase())

// convert to lowercase
console.log(name.toLowerCase())

// includes method
let password = 'abc123098'
console.log(password.includes('password'))

//Trim 
console.log(name.trim())
*/
//challenge 
let isValidPassword = function(password) {
    if (password.length > 8 && !password.includes('password')){
        return true
    }else {
        return false
    }
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123lkvbad'))
console.log(isValidPassword('abcpassworddkvja123'))