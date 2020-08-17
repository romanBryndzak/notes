import React from "react";
import './auxiliary.css'

function Create({createNote}) {
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

    return (
        <form onSubmit={formHandler} className='create'>
            <input type="text" placeholder='name' onChange={
                event => setName(event.target.value)}
                   className='name'
            />
            <input type="text" placeholder='text' onChange={
                event => setValue(event.target.value)}/>
            <button>Add</button>
        </form>
    )
}

export default Create;