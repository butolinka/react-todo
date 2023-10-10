import React from 'react';

function AddToDoForm(){
    return(
        <form>
            <label htmlFor='todoTitle'>Title
            </label>
            <input id='todoTitle'></input>
            <button type='submit'>Add</button>
        </form>
    )
}
export default AddToDoForm;