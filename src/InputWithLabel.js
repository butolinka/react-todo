import React from "react";

function InputWithLabel ({todoTitle, handlerTitleChange, children, id, type ='text', name='title'}){
    const inputRef = React.useRef();
    React.useEffect(() =>{
            inputRef.current.focus();
    });
    return(
        <>
            <label htmlFor={id}>{children} </label>
            <input 
            ref={inputRef}
            type={type}
            id={id} 
            name={name}
            value={todoTitle}
            onChange={handlerTitleChange}/>
        </> 
            );
};


export default InputWithLabel;