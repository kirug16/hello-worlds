// Global scope (fahreneitToCelcius,tempOne, tempTwo )
    // Local Scope (celsius, fahrenheit)

let fahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9

    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius
}

let tempOne = fahrenheitToCelsius(32)
let tempTwo = fahrenheitToCelsius(68)


console.log(tempOne)
console.log(tempTwo)