import React from 'react';
import styles from '../TodoListItem.module.css';
import PropTypes from "prop-types";

function TodoListItem({todo, onRemoveTodo}){
    return(
        <div className={styles.list}>
        <li className={styles.ListItem}>
        <img className={styles.img} width="16" height="16" src="https://img.icons8.com/office/16/goal--v1.png" alt="goal--v1"/> {todo.title}
        </li>
        <button type='button' onClick ={() => onRemoveTodo(todo.id)} className={styles.btn}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 64 64">
<rect width="48" height="10" x="7" y="7" fill="#f9e3ae" rx="2" ry="2"></rect><rect width="36" height="4" x="13" y="55" fill="#f9e3ae" rx="2" ry="2"></rect><path fill="#c2cde7" d="M47 55L15 55 10 17 52 17 47 55z"></path><path fill="#ced8ed" d="M25 55L15 55 10 17 24 17 25 55z"></path><path fill="#b5c4e0" d="M11,17v2a3,3,0,0,0,3,3H38L37,55H47l5-38Z"></path><path fill="#8d6c9f" d="M16 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V11A1 1 0 0 0 16 10zM11 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V11A1 1 0 0 0 11 10zM21 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V11A1 1 0 0 0 21 10zM26 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V11A1 1 0 0 0 26 10zM31 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V11A1 1 0 0 0 31 10zM36 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V11A1 1 0 0 0 36 10zM41 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V11A1 1 0 0 0 41 10zM46 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V11A1 1 0 0 0 46 10zM51 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V11A1 1 0 0 0 51 10z"></path><path fill="#8d6c9f" d="M53,6H9A3,3,0,0,0,6,9v6a3,3,0,0,0,3,3c0,.27,4.89,36.22,4.89,36.22A3,3,0,0,0,15,60H47a3,3,0,0,0,1.11-5.78l2.28-17.3a1,1,0,0,0,.06-.47L52.92,18H53a3,3,0,0,0,3-3V9A3,3,0,0,0,53,6ZM24.59,18l5,5-4.78,4.78a1,1,0,1,0,1.41,1.41L31,24.41,37.59,31,31,37.59l-7.29-7.29h0l-5.82-5.82a1,1,0,0,0-1.41,1.41L21.59,31l-7.72,7.72L12.33,27.08,21.41,18Zm16,0,3.33,3.33a1,1,0,0,0,1.41-1.41L43.41,18h7.17L39,29.59,32.41,23l5-5Zm-11,21L23,45.59l-5.11-5.11a1,1,0,0,0-1.41,1.41L21.59,47l-5.86,5.86L14.2,41.22l8.8-8.8Zm7.25,4.42L32.41,39,39,32.41l5.14,5.14a1,1,0,0,0,1.41-1.41L40.41,31,47,24.41l2.67,2.67-1.19,9L38.3,46.28h0L31,53.59,24.41,47,31,40.41l4.42,4.42a1,1,0,0,0,1.41-1.41ZM23,48.41,28.59,54H17.41Zm16,0L44.59,54H33.41ZM40.41,47,48,39.37,46.27,52.86ZM50,24.58,48.41,23l2.06-2.06Zm-19-3L27.41,18h7.17Zm-19.47-.64L13.59,23,12,24.58Zm3.47.64L11.41,18h7.17ZM47,58H15a1,1,0,0,1,0-2H47a1,1,0,0,1,0,2Zm7-43a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V9A1,1,0,0,1,9,8H53a1,1,0,0,1,1,1Z"></path>
</svg>
        </button>
        </div>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
    }),
    onRemoveTodo: PropTypes.func,
}
export default TodoListItem;