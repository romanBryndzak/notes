import React from "react";
import N from "./Notes.module.css";

function EditElement({note}) {
    function removeNote() {
        alert('Edit')
    }

    return (
        <div className={N.wrapperNote}>
            <p><strong>{note.name}</strong>
                {note.createDate}
                <button onClick={() => removeNote(note.id)}>edit</button>
            </p>
            <li>
                <span>
                    {note.content}
                </span>
            </li>
        </div>
    )

}

export default EditElement