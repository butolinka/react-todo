import React from "react";

function InputWithLabel ({todoTitle, handlerTitleChange, children}){
    const inputRef = React.useRef();
    React.useEffect(() =>{
            inputRef.current.focus();
    });
    return(
        <>
            <label htmlFor='todoTitle'>{children} </label>
            <input 
            ref={inputRef}
            type="text" 
            id='todoTitle' 
            name='title' 
            value={todoTitle}
            onChange={handlerTitleChange}/>
        </> 
            );
};


export default InputWithLabel;