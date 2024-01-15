import React from 'react';
import TodoListItem from './TodoListItem';
import styles from './TodoListItem.module.css';




function ToDoList ({todoList, onRemoveTodo}) {
    return (
    <ul className={styles.List}>
    {todoList.map((todoItem)=> (
        <TodoListItem key={todoItem.id} todo ={todoItem} onRemoveTodo= {onRemoveTodo}/>
    ))}
    </ul>
    );  
};

export default ToDoList;