import React from "react";

function InputWithLabel ({todoTitle, handlerTitleChange, label}){

    return(
        <>
            <label htmlFor='todoTitle'>{label} </label>
            <input 
            type="text" 
            id='todoTitle' 
            name='title' 
            value={todoTitle}
            onChange={handlerTitleChange}/>
        </> 
            );
};


export default InputWithLabel;