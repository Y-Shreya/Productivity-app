//Fetch todos from localstorage
const getSavedTodos=()=>{
    const todosJSON=localStorage.getItem('todos')
    try{
        return todosJSON!==null?JSON.parse(todosJSON):[]
    }
    catch(e)
    {
        return []
    }
        
}
//Save todos to localstorage
const saveTodos=(todos)=>{
    
    localStorage.setItem('todos',JSON.stringify(todos))}
//Removing todos
const removeTodo=(id)=>
{
    let removeIndex=todos.findIndex((todo)=>id==todo.id)
    todos.splice(removeIndex,1)
    
}
//Rendering the todos
const renderTodos=function(todos){
    document.querySelector('#todos').innerHTML=''
    todos.forEach(function(todo)
    {
        const root=document.createElement('div')
        const text=document.createElement('span')
        const removebutton=document.createElement('button')
        removebutton.textContent='X'
        removebutton.style.color='black'
        removebutton.style.background='#deeaee'
        removebutton.style.padding='0.2rem'
        removebutton.style.margin='0.2rem'
        removebutton.style.border='none'
        const checkbox1=document.createElement('input')
        checkbox1.setAttribute('type','checkbox')
        checkbox1.checked=todo.completed
        checkbox1.style.background='#02ccff'
        checkbox1.style.padding='1rem',
        checkbox1.style.margin='0.5rem'
        root.appendChild(checkbox1)
        checkbox1.addEventListener('change',function(e)
            {
            
                if(e.target.checked)
                {
                    todo.completed=true
                    

                }
                else {
                    
                  todo.completed=false
                   
                }
                saveTodos(todos)
                renderTodos(todos)
                
            })
        text.textContent=todo.text
        text.style.fontFamily='Menlo,monospace'
        text.style.color='black'
        text.style.fontSize='15px'
        
        root.appendChild(text)
        root.appendChild(removebutton)
        removebutton.addEventListener('click',function(){

            removeTodo(todo.id)
            saveTodos(todos)
            renderTodos(todos)
            
        })
        
        document.querySelector('#todos').appendChild(root)
    })
}