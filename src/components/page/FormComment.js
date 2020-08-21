import React from "react";
import './auxiliary.css';


function FormComment({id, createElement}) {
    const [value, setValue] = React.useState('');
    const [name, setName] = React.useState('');
    let noteId = id;

    function formHandler(event,) {
        event.preventDefault();
        if (value.trim()) {
            createElement(value, name, noteId);
            setValue('');
            setName('')
        }
    }

    return (
        <form onSubmit={formHandler} className='create'>
            <input type="text" required placeholder='name' onChange={
                event => setName(event.target.value)}
                   value={name} className='name'
            />
            <input type="text" placeholder='content' onChange={
                event => setValue(event.target.value)}
                   value={value}
            />
            <button>Add</button>
        </form>
    )
}

export default FormComment