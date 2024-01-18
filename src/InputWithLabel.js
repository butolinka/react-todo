import React from "react";
import styles from './TodoListItem.module.css';

function InputWithLabel ({todoTitle, handlerTitleChange, children, id, type ='text', name='title'}){
    const inputRef = React.useRef();
    React.useEffect(() =>{
            inputRef.current.focus();
    });
    return(
        <>
            <label htmlFor={id} className={styles.label} >{children} </label>
            <input 
            ref={inputRef}
            type={type}
            id={id} 
            name={name}
            value={todoTitle}
            onChange={handlerTitleChange} className={styles.input}/>
        </> 
            );
};


export default InputWithLabel;