import React from "react";
import './auxiliary.css';
import N from "./Notes.module.css";
import CreateElement from "./CreateElement";



function Create({notes, createNote}) {

    const copyCreateElement = notes.map(note =>
        <CreateElement note={note} key={note.id} createNote={createNote}/> );

    const [value, setValue] = React.useState('');
    const [name, setName] = React.useState('');

    function formHandler(event) {
        event.preventDefault();
        if (value.trim()) {
            createNote(value, name);
            setValue('');
            setName('')
        }
    }
    return <div>
        <h3>Create</h3>
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
        <ul className={N.wrapper}>
            {copyCreateElement}
        </ul>
    </div>
}

export default Create