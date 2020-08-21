import React from "react";
import N from "./Notes.module.css";
import EditElement from "./EditElement";


function Edit({notes, editingNote}) {

    const copyEditElement = notes.map(note =>
        <EditElement note={note} key={note.id} editingNote={editingNote}/>);

    return <div>
        <h3>Edit</h3>
        <ul className={N.wrapper}>
            {copyEditElement}
        </ul>
    </div>
}

export default Edit