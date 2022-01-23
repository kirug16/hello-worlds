const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

/*
console.log(notes.pop())
notes.push('My new note')

console.log(notes.shift())
notes.unshift('My first note')

notes.splice(1,1)
notes.splice(1,0, 'this is the new item added')

notes[2] = 'This is now the new note 3'

notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})
*/
//console.log(notes.length)
//console.log(notes[2])
//console.log(notes[notes.length - 1]) 
//console.log(notes)
/*
// Counting ... 1
for (let count = 0; count <= 2; count++) {
    console.log(count)
}

for ( let count = 0; count < notes.length; count++) {
    console.log(notes[count])
}

for ( let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count])
}


const index = notes.findIndex(function (note, index) {
    console.log(note)
    return note.title == 'Habbits to work on'
})
console.log(index)
*/
/*
const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() == noteTitle.toLowerCase()
    })
    return notes[index]
}
*/

const sortNotes = function (notes) {
    notes.sort(function (a, b){
        if (a.title < b.title) {
            return -1
        }else if (b.title < a.title){
            return 1
        }else {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title == noteTitle
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTilteMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodeyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTilteMatch || isBodeyMatch
    })
}

// console.log(findNotes(notes, 'work'))

// const note = findNote(notes, 'Office modification')
// console.log(note)

sortNotes(notes)
console.log(notes)