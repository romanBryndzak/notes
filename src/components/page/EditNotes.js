import React from 'react';
import N from './Notes.module.css';
import EditNotesElement from './EditNotesElement.js';


function EditNotes({notes, editingNote}) {

    const copyEditElement = notes && notes.map(note =>
        <EditNotesElement note={note} key={note.id} editingNote={editingNote}/>);

    return (
        <div>
            <h3>Edit</h3>
            <ul className={N.ulWrapper}>
                {copyEditElement}
            </ul>
        </div>
    )

}

export default EditNotes