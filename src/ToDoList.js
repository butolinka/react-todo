import React from 'react';
import TodoListItem from './TodoListItem';

let todoList = [
    {id: 1, title: "Complete an assignment"},
    {id: 2, title: "Check requirements"},
    {id: 3, title: "Mark the assignment as done"}
  ];

function ToDoList () {
    return (
    <ul>
    {todoList.map((todoItem)=> (
        <TodoListItem key={todoItem.id} todo ={todoItem}/>
    ))}
    </ul>
    );  
};

export default ToDoList;