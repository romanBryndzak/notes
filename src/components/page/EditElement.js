import React, {useState} from "react";
import N from "./Notes.module.css";

function EditElement({note, editingNote}) {
    const [toggleEdit, setToggleEdit] = useState(true);
    const [valueEdit, setValueEdit] = useState(note.content);

    function editNote(id) {
        setToggleEdit(true);
        editingNote(valueEdit, id);
    }

    return (
        <div className={N.wrapperNote}>
            <p><strong>{note.name}</strong>
                {note.createDate}
                <button onClick={() => setToggleEdit(false)}>editing</button>
            </p>
            {toggleEdit
                ? <li><span>{note.content}</span></li>
                : <li className={N.editBox}>
                    <input value={valueEdit}
                           onChange={e => setValueEdit(e.target.value)}/>
                    <button onClick={() => editNote(note.id)}>edit</button>
                </li>
            }
        </div>
    )

}

export default EditElement