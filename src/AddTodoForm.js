import React from 'react';

function AddToDoForm(props){ 
    const [todoTitle, setTodoTitle] = React.useState('');
    const handlerTitleChange = (event) =>{
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };
    function handleAddTodo(event){
        event.preventDefault();
        props.onAddTodo(todoTitle);
        event.target.reset();
    }
    return(
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title </label>
            <input type="text" id='todoTitle' name='title' value={todoTitle} onChange={handlerTitleChange}/>
            <button type='submit'> Add</button>
        </form>
    )
}
export default AddToDoForm;