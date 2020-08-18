import React from "react";
import N from "./Notes.module.css";

function CreateElement({note}) {


    return (
        <div className={N.wrapperNote}>
            <p><strong>{note.name}</strong>
                {note.createDate}
            </p>
            <li>
                <span>
                    {note.content}
                </span>
            </li>
        </div>
    )
}

export default CreateElement;