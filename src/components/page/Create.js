import React from "react";

function Create({createNote}) {
    const [value, setValue] = React.useState('');

    function formHandler(event) {
        event.preventDefault();
        if(value.trim()) {
            createNote(value);
            setValue('')
        }
    }

    return (
        <form onSubmit={formHandler}>
            <input type="text" onChange={
                event => setValue(event.target.value)}/>
            <button>Add</button>
        </form>
    )
}

export default Create;