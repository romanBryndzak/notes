import React from 'react';
import NoteElement from './NoteElement.js';
import N from './Notes.module.css';

function Notes({notes, removeNote, createComment}) {

    return (
        <ul className={N.ulWrapper}>
            {notes && notes.map(note => {
                return <NoteElement
                    createComment={createComment}
                    removeNote={removeNote}
                    note={note} key={note.id}
                />
            })}
        </ul>
    )
}

export default Notes