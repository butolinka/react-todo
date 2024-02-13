
import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import styles from './TodoListItem.module.css';

function Notes({todoList, setTodoList}){
    const [notes, setNotes] = useState({});
    const [showInput, setShowInput] = useState({});


    const handleAddNoteClick = (todoId) =>{
        setShowInput((prev) =>({
            ...prev,
            [todoId]: true,
        }));
    };
    const handleNoteChange = (e, todoId)=>{
        const {value} = e.target;
        setNotes((prevNotes) =>({
            ...prevNotes,
            [todoId]: value,
        }));
    };
    const handleNoteSubmit = async (e, todoId) =>{
        e.preventDefault();
        const noteContent = notes[todoId];
        if(noteContent.trim() !== ""){
            try{
            const updatedtodoList = todoList.map((todo) =>{
                if (todo.id===todoId){
                    const updatedNotes = [...(todo.notes || []), noteContent];
                    return {...todo, notes: updatedNotes};
                }
                return todo;
            });
            setTodoList(updatedtodoList);
            await createNoteInAPI(todoId, noteContent);
        } catch(error){
            console.error('Error handling note submission:', error);
        }
    }
        setNotes((prevNotes) =>({
        ...prevNotes,
        [todoId]: '',
    }));
    setShowInput((prev) =>({
        ...prev,
        [todoId]: false,
    }));
    };

    async function createNoteInAPI(todoId, noteContent){
        const apiKey = process.env.REACT_APP_AIRTABLE_API_TOKEN;
        const baseId = process.env.REACT_APP_AIRTABLE_BASE_ID;
        const tableName = process.env.REACT_APP_TABLE_NAME;
        const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;

        const options = {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                fields:{
                    'notes': [...(todoList.find(todo=>todo.id===todoId).notes||[]),noteContent]
                }
            })
        };
        try{
            const response = await fetch(url, options);
            if (!response.ok){
                throw new Error(`Failed to create note in Airtable: ${response.status} ${response.statusText}`);
            }
            const data  = await response.json();
            return data;
        } catch (error){
            console.error("Error creating note:", error.message);
            return null;
        }
    }
    
    return (
        <div>
            <h1 className={styles.h1}>Notes</h1>
            <ul className={styles.List}>
            {todoList.map((todo) => (
                <li key={todo.id} className={styles.ListItemNote}>
                    <h3>{todo.title}</h3>
                    {showInput[todo.id] &&(
                    <form onSubmit={(e)=> handleNoteSubmit(e, todo.id)} className={styles.form}>
                        <input
                        type='text'
                        value={notes[todo.id] || ''}
                        onChange={(e) => handleNoteChange(e, todo.id)}
                        placeholder='Add your note...'
                        className={styles.inputNote}
                        ></input>
                        <button type='submit' className={styles.btnNote}>
                        <img className={styles.imgNote} width="48" height="48" src="https://img.icons8.com/color/48/inscription.png" alt="inscription"/>
                        </button>
                    </form>
                    )}
                    
                    {todo.notes && (
                        <div>{todo.notes.map((note, index)=>(
                        <p key ={index}>{note}</p>
                    ))}
                    </div>
                    )}
                    {!showInput[todo.id] &&(
                        <button onClick={()=> handleAddNoteClick(todo.id)} className={styles.btn}>
                            Add note
                        </button>
                    )}
                </li>
            ))}
            <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 40 40">
<path fill="#dbf2ff" d="M3.5 38.5L3.5 13.286 19.998 3.58 36.5 13.286 36.5 38.5z"></path><path fill="#7496c4" d="M19.998,4.16L36,13.572V38H4V13.572L19.998,4.16 M19.998,3L3,13v26h34V13L19.998,3L19.998,3z"></path><path fill="#b5ddf5" d="M4 34H36V38H4z"></path><path fill="#f78f8f" d="M19.998 4.645L1.5 15.955 1.5 12.896 19.998 1.586 38.5 12.896 38.5 15.955z"></path><path fill="#c74343" d="M19.998,2.172L38,13.176v1.887L20.519,4.378l-0.522-0.319l-0.522,0.319L2,15.063v-1.887 L19.998,2.172 M19.998,1L1,12.615v4.231L19.998,5.231L39,16.846v-4.231L19.998,1L19.998,1z"></path><g><path fill="#ffc49c" d="M14.5 21.5H25.5V38.5H14.5z"></path><path fill="#a16a4a" d="M25,22v16H15V22H25 M26,21H14v18h12V21L26,21z"></path></g><path fill="#a16a4a" d="M23 30A1 1 0 1 0 23 32A1 1 0 1 0 23 30Z"></path>
</svg></Link>
            </ul>

            
        </div>
    );
}

export default Notes;