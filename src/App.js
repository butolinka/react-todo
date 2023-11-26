import React from 'react';
import ToDoList from './ToDoList';
import AddToDoForm from './AddTodoForm';
function useSemiPersistentState() {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
    );
  React.useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);
  return [todoList,setTodoList];
}
function App() {
  const [todoList,setTodoList] = useSemiPersistentState();
  const addTodo = (newTodo) =>{
    setTodoList((previousTodoList) => [...previousTodoList, newTodo]);
  };
  function removeTodo(id){
    const todoUpgrade = todoList.filter((todo)=> id !== todo.id);
    setTodoList(todoUpgrade);
  }
  return (
    <>
      <h1>Todo List </h1>
      <AddToDoForm onAddTodo={addTodo} />
      <ToDoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </>
  );
}

export default App;
