import React from 'react';
import N from './Notes.module.css';

function CreateNoteElement({note}) {

    return (
        <div className={N.wrapperCreateNote}>
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

export default CreateNoteElement;