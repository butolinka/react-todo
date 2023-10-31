import React from 'react';
import ToDoList from './ToDoList';
import AddToDoForm from './AddTodoForm';

function App() {
  const [newTodo, setNewTodo] = React.useState();
  return (
    <div>
      <h1>Todo List </h1>
      <AddToDoForm onAddTodo={setNewTodo} />
      <p>Another task: {newTodo}</p>
      <ToDoList />
    </div>
  );
}

export default App;
