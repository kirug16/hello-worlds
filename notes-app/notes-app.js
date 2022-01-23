const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// DOM -> Documnet Object Model

// Query and Remove
//const p = document.querySelector('p')
//p.remove()

// Query all and Remove
/*
const ps = document.querySelectorAll('p')

ps.forEach(function (p){
    p.textContent = '*****'
    //console.log(p.textContent)
    //p.remove()
})


//Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from javascript' 
document.querySelector('body').appendChild(newParagraph)
*/

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e){
    e.target.textContent = 'The button was clicked'
})


document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})
