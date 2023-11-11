import React from 'react';
import ToDoList from './ToDoList';
import AddToDoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const addTodo = (newTodo) =>{
    setTodoList((previousTodoList) => [...previousTodoList, newTodo]);
  };
  return (
    <div>
      <h1>Todo List </h1>
      <AddToDoForm onAddTodo={addTodo} />
      <ToDoList todoList={todoList}/>
    </div>
  );
}

export default App;
