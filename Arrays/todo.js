//const toDo = ['To do 1', 'To do 2', 'To do 3', 'To do 4', 'To do 5']
const toDo = [ {
    todo: 'To do 1',
    completed: true
}, {
    todo: 'To do 2',
    completed: false
}, {
    todo: 'To do 3',
    completed: false
}, {
    todo: 'To do 4',
    completed: true
}, {
    todo: 'To do 5',
    completed: false
}]

/*
console.log(`You have ${toDo.length} todos`)
console.log(`Todo : ${toDo[0]}`)
console.log(`Todo 2 : ${toDo[toDo.length - 2]}`)


//challenge 1
toDo.splice(3,1)
toDo.push('This is the new item at the end')
toDo.splice(0,1)

console.log(toDo)


// Challenge 2
toDo.forEach ( function (item, index) {
    const num = index + 1 
    console.log(`${num}. ${item}`)
})

// challenge 3
for (let count = 0; count < toDo.length; count++){
    const num = count + 1
    console.log(`${num}. ${toDo[count]}`)
}
*/

// challenge 4

const deleteTodo = function (toDo, toDoList){
    const index = toDo.findIndex(function (todos){
        return todos.todo.toLowerCase() == toDoList.toLowerCase()
    })
    if (index > -1) {
        toDo.splice(index, 1)
    }
}

const getThingsToDo = function (toDo, query) {
    return toDo.filter(function (toDos, index){
        return toDos.completed == false
    })

}


const sortTodos = function (toDo) {
    toDo.sort(function (a, b){
        if (a.completed  == false) {
            return -1
        }else if (b.title == true){
            return 1
        }else {
            return 0
        }
    })
}

sortTodos(toDo)
console.log(toDo)
// console.log(getThingsToDo(toDo, '3'))

//deleteTodo(toDo, 'to do 3')
//console.log(toDo)