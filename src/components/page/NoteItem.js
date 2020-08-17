import React from "react";
import N from './Notes.module.css'

function NoteItem({note}) {

    return (
        <div className={N.wrapperNote}>
            <p><strong>{note.name}</strong><button>delete</button></p>
            <li>
            <span>
                {note.content}
            </span>
            </li>
        </div>

    )
}

export default NoteItem