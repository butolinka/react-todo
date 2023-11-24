import React from 'react';
import InputWithLabel from './InputWithLabel';

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
        <InputWithLabel todoTitle={todoTitle} handlerTitleChange={handlerTitleChange} label ="Title"/>
            <button type='submit'> Add</button>
        </form>
    )
}
export default AddToDoForm;