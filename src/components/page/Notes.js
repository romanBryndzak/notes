import React from "react";
import NoteItem from "./NoteItem";
import N from "./Notes.module.css";

function Notes({notes, removeNote, createComment}) {

    return (
        <ul className={N.wrapper}>
            {notes.map(note => {
                return <NoteItem
                    createComment={createComment}
                    removeNote={removeNote}
                    note={note} key={note.id}
                />
            })}
        </ul>
    )
}

export default Notes