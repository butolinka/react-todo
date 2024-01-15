import React from 'react';
import styles from './TodoListItem.module.css';

function TodoListItem({todo, onRemoveTodo}){
    return(
        <>
        <li className={styles.ListItem}>🗸 {todo.title}
        <hr className={styles.hr}></hr> 
        <button type='button' onClick ={() => onRemoveTodo(todo.id)} className={styles.btn}>
        Remove
        </button>
        </li>
        </>
    )
}

export default TodoListItem;