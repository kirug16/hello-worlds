let myBook = {
    title: '1984', 
    author: 'George Orwell', 
    pageCount: 326
}

let otherBook = {
    title: 'A peoples History', 
    author: 'Howard Zinn', 
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.summary)

//challenge 

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit +456.67)*5/9, 
        celsius: (fahrenheit - 32) *5/9
    }
}

let tempreature = convertFahrenheit(56)
console.log(tempreature)