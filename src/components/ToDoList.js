import React from 'react';
import TodoListItem from './TodoListItem';
import styles from '../TodoListItem.module.css';
import PropTypes from "prop-types";




function ToDoList ({todoList, onRemoveTodo}) {
    return (
    <ul className={styles.List}>
    {todoList.map((todoItem)=> (
        <TodoListItem key={todoItem.id} todo ={todoItem} onRemoveTodo= {onRemoveTodo}/>
    ))}
    </ul>
    );  
};

ToDoList.propTypes = {
    todoList: PropTypes.array,
    onRemoveTodo: PropTypes.func,
}
export default ToDoList;