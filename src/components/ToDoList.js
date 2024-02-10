import React from 'react';
import TodoListItem from './TodoListItem';
import styles from './TodoListItem.module.css';
import PropTypes from "prop-types";




function ToDoList ({todoList, onRemoveTodo, toggleSorting, sorting,}) {
    const sortingButton = sorting === "asc" ? "A to Z" : "Z to A";
    return (
    <ul className={styles.List}>
    <button onClick={toggleSorting} className={styles.btnToggle}> {sortingButton} </button>
    {todoList.map((todoItem)=> (
        <TodoListItem key={todoItem.id} todo ={todoItem} onRemoveTodo= {onRemoveTodo}/>
    ))}
    </ul>
    );  
};

ToDoList.propTypes = {
    todoList: PropTypes.array,
    onRemoveTodo: PropTypes.func,
    toggleSorting: PropTypes.func,
    sorting: PropTypes.string,
}
export default ToDoList;