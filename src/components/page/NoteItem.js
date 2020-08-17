import React from "react";
import N from './Notes.module.css'

function NoteItem({note, removeNote}) {

    return (
        <div className={N.wrapperNote}>
            <p><strong>{note.name}</strong>
                <button onClick={removeNote.bind(null, note.id)}>remove</button></p>
            <li>
            <span>
                {note.content}
            </span>
            </li>
        </div>

    )
}

export default NoteItem