import React from 'react';
import ToDoList from './ToDoList';
import AddToDoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
  const fetchData = async() => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        
      },
    };
    try{
    const response = await fetch(url, options);
    if (!response.ok){
      throw new Error(`Error:${response.status}`);
    }
    const data = await response.json();
    const todos = data.records.map((todo) =>{
      return {id: todo.id, title: todo.fields.title};
    });
    setTodoList(todos);
    setIsloading(false);
    } catch(error){
      console.log(error.message);
    }
  };
    React.useEffect(() =>{
    fetchData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const addNewTodo = async(title) =>{
    const addTitle = {
      fields: {
        title: title.title,
      },
    };
    console.log('title:', title);
    
  const requestOptions = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
    },
    body: JSON.stringify(addTitle),
  };
  try{
    const response = await fetch(url, requestOptions);
    if (!response.ok){
      throw new Error(`Error:${response.status}`);
    }
    const todo = await response.json();
    const newTodo = {id: todo.id, title: todo.fields.title};
    setTodoList([...todoList, newTodo]);
  } catch(error){
    console.log(error.message);
    return null;
  }
};

  function removeTodo(id){
    const todoUpgrade = todoList.filter((todo)=> id !== todo.id);
    setTodoList(todoUpgrade);
  }
  return (
    <>
    <h1>Todo List </h1>
      <AddToDoForm onAddTodo={addNewTodo} />
    {isLoading? (<p>Loading...</p> ):
      (<ToDoList todoList={todoList} onRemoveTodo={removeTodo}/>
      )}
    </>
  );
}

export default App;
