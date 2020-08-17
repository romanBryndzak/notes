import React from "react";
import N from './Notes.module.css'
import NoteItem from "./NoteItem";

function Notes({notes, removeNote}) {

    return (
        <ul className={N.wrapper}>
            {notes.map(note => {
                    return <NoteItem removeNote={removeNote}
                        note={note} key={note.id}
                    />
                }
            )}
        </ul>
    )
}

export default Notes