import React from 'react';
import TodoListItem from './TodoListItem';



function ToDoList (props) {
    return (
    <ul>
    {props.todoList.map((todoItem)=> (
        <TodoListItem key={todoItem.id} todo ={todoItem}/>
    ))}
    </ul>
    );  
};

export default ToDoList;