import React from 'react';
import ToDoList from './ToDoList';
import AddToDoForm from './AddTodoForm';

function App() {
  const [newTodo, setNewTodo] = React.useState();
  const [todoList, setTodoList] = React.useState([]);
  const handleAddTodo = (newTodo) => {
    setTodoList((previousTodoList) => [...previousTodoList, newTodo]);
  }
  return (
    <div>
      <h1>Todo List </h1>
      <AddToDoForm onAddTodo={handleAddTodo} />
      <p>Another task: {newTodo}</p>
      <ToDoList todoList={todoList}/>
    </div>
  );
}

export default App;
