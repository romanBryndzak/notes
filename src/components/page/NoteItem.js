import React from "react";
import N from './Notes.module.css'

function NoteItem({note, removeNote}) {

    return (
        <ul className={N.wrapper}>
            <div className={N.wrapperNote}>
                <p><strong>{note.name}</strong>
                    {note.createDate}
                    <button onClick={removeNote.bind(null, note.id)}>remove</button>
                </p>
                <li>
            <span>
                {note.content}
            </span>
                </li>
            </div>
        </ul>
    )
}

export default NoteItem