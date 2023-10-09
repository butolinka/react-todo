import React from 'react';
import ToDoList from './ToDoList';
import AddToDoForm from './AddTodoForm';

function App() {
  return (
    <div>
      <h1>Todo List </h1>
      <AddToDoForm />
      <ToDoList />
    </div>
  );
}

export default App;
