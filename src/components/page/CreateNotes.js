import React from 'react';
import N from './Notes.module.css';
import CreateNoteElement from './CreateNoteElement.js';
import FormNotes from './FormNotes.js';


function CreateNotes({notes, createNote}) {

    return (
        <div>
            <h3>Create</h3>
            <FormNotes createElement={createNote}/>
            <ul className={N.ulWrapper}>
                {notes && notes.map(note => {
                    return <CreateNoteElement note={note} key={note.id}/>
                })}
            </ul>
        </div>
    )
}

export default CreateNotes