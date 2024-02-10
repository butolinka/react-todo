import React from "react";
import styles from './TodoListItem.module.css';
import PropTypes from "prop-types";

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

InputWithLabel.propTypes ={
    todoTitle: PropTypes.string,
    handlerTitleChange: PropTypes.func,
    children: PropTypes.node,
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
}

export default InputWithLabel;