import React from 'react';
import N from './Notes.module.css'

function FormNotes({id, createElement, pattern, title}) {

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
        <form onSubmit={formHandler} className={N.FormNotes}>
            <input type='text' required placeholder='name'
                   pattern={pattern} title={title}
                   onChange={event => setName(event.target.value)}
                   value={name} className={N.name}
            />
            <input type='text' placeholder='content'
                   onChange={event => setValue(event.target.value)}
                   value={value}
            />
            <button>Add</button>
        </form>
    )
}

export default FormNotes