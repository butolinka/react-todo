import React from 'react';
let todoList = [
  {id: 1, title: "Complete an assignment"},
  {id: 2, title: "Check requirements"},
  {id: 3, title: "Mark the assignment as done"}
];
function App() {
  return (
    <div>
      <h1>Todo List </h1>
      <ul>
        {todoList.map((todoItem)=> (
          <li key={todoItem.id}>{todoItem.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
