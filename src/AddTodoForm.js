import React from 'react';

function AddToDoForm({onAddTodo}){ 
    const [todoTitle, setTodoTitle] = React.useState('');
    const handlerTitleChange = (event) =>{
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };
    function handleAddTodo(event){
        event.preventDefault();
        onAddTodo({
            title: todoTitle,
            id: Date.now(),
        });
        setTodoTitle('');
    }
    return(
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title </label>
            <input type="text" id='todoTitle' name='title' value={todoTitle}
                onChange={handlerTitleChange}/>
            <button type='submit'> Add</button>
        </form>
    )
}
export default AddToDoForm;