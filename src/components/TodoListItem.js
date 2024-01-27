import React from 'react';
import styles from '../TodoListItem.module.css';
import PropTypes from "prop-types";

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

TodoListItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
    }),
    onRemoveTodo: PropTypes.func,
}
export default TodoListItem;