const toDo = [ {
    text: 'Order Cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy Food',
    completed: false
}, {
    text: 'Do work',
    completed: true
}, {
    text: 'Exercise',
    completed: false
}]



/*
const p = document.querySelectorAll('p')

p.forEach(function(paragraphs){
    if (paragraphs.textContent.includes('the')){
        paragraphs.remove()
    }
})
*/

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function (toDo, filters) {
    let filteredTodos = toDo.filter(function (todo){
        return todo.text.includes(filters.searchText)
    })

    filteredTodos = filteredTodos.filter(function (todo){
        return !filters.hideCompleted || !todo.completed
        // if (filters.hideCompleted) {
        //     return !todo.completed
        // }else {
        //     return true
        // }
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML=''
      
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach(function (todo){
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(toDo, filters)

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(toDo, filters)
})

document.querySelector('#for-fun').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(toDo, filters)
})
