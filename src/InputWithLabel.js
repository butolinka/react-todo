import React from "react";

function InputWithLabel ({todoTitle, handlerTitleChange, children}){

    return(
        <>
            <label htmlFor='todoTitle'>{children} </label>
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