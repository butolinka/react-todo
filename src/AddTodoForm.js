import React from 'react';
import InputWithLabel from './InputWithLabel';

function AddToDoForm({onAddTodo}){ 
    const [todoTitle, setTodoTitle] = React.useState('');
    const handlerTitleChange = (event) =>{
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };
    const newTodo = async(todo) =>{
        try{
            const airtableData = {
                fields: {
                    title: todo,
                },
            };

            const response = await fetch(
                `https://api.airtable.com/v0/
                ${process.env.REACT_APP_AIRTABLE_BASE_ID}/
                ${process.env.REACT_APP_TABLE_NAME}`,
                {
                    method: 'POST',
                    headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
                    },
                    body: JSON.stringify(airtableData),
                });
                if (!response.ok) {
                    const message = `Error has ocurred:${response.status}`;
                    throw new Error(message);
                }
                const dataResponse = await response.json();
    return dataResponse;} catch (error) {
    console.log(error.message);
    return null;
        }
    };
    const  handleAddTodo= async (event) => {
        event.preventDefault();
        const response = await newTodo(todoTitle);
        if (response){
            onAddTodo({
            title: todoTitle,
            id: response.id,
        });
        }
        
        setTodoTitle('');
    };
    return(
        <form onSubmit={handleAddTodo}>
        <InputWithLabel todoTitle={todoTitle} handlerTitleChange={handlerTitleChange}>Title </InputWithLabel>
            <button type='submit'> Add</button>
        </form>
    )
}
export default AddToDoForm;