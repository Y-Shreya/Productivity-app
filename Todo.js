let todos=getSavedTodos()
renderTodos(todos)

document.querySelector('#add-form').addEventListener('submit',function(e){
    
    e.preventDefault()
    let t=e.target.elements.create.value
    todos.push({
        text:t,
        completed:false,
        id:uuidv4()
    })
    saveTodos(todos)
    renderTodos(todos)
    
    
    e.target.elements.create.value=''
})