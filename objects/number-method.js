
let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)


//Challenge 
let minimum = 1
let maximum = 5

let makeGuess = function(guessNum) {
    let randomNum = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
    if (guessNum == randomNum) {
        return true
    }else {
        return false 
    }
}
console.log(makeGuess(3))