import React from 'react';
import ToDoList from './ToDoList';
import AddToDoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);

  React.useEffect(() =>{
    new Promise ((resolve, reject) =>
    setTimeout(
      ()=>
      resolve ({
        data: {
          todoList: JSON.parse(localStorage.getItem("savedTodoList")),
        },
      }),
      2000
    )
    ).then((result) =>{
      setTodoList(result.data.todoList);
      setIsloading(false);
    });
  }, []);
  React.useEffect(() =>{
    if(isLoading===false){
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

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
    {isLoading? (<p>Loading...</p> ):
      (<ToDoList todoList={todoList} onRemoveTodo={removeTodo}/>
      )}
    </>
  );
}

export default App;
