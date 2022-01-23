let myBook = {
    title: '1984', 
    author: 'George Orwell', 
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title ='Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)


// challenge

let me = {
    personName: 'Andrew',
    location: 'Philidelphia',
    age: 27
}

console.log(`${me.personName} is ${me.age} and lives in ${me.location}`)

me.age = me.age +1
console.log(`${me.personName} is ${me.age} and lives in ${me.location}`)

