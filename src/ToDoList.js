import React from 'react';
import TodoListItem from './TodoListItem';



function ToDoList ({todoList}) {
    return (
    <ul>
    {todoList.map((todoItem)=> (
        <TodoListItem key={todoItem.id} todo ={todoItem}/>
    ))}
    </ul>
    );  
};

export default ToDoList;