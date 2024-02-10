import React from 'react';
import InputWithLabel from './InputWithLabel';
import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';


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
        <form onSubmit={handleAddTodo} className={styles.form}>
        <InputWithLabel todoTitle={todoTitle} handlerTitleChange={handlerTitleChange} >Title </InputWithLabel>
            <button type='submit' className={styles.btn}> Add</button>
        </form>
    )
}

AddToDoForm.propTypes ={
    onAddTodo: PropTypes.func,
};
export default AddToDoForm;