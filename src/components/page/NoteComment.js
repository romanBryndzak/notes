import React from 'react';
import N from './Notes.module.css'

const NoteComment = ({comment}) => {

    return (
        <div className={N.wrapperComment}>
            <p>
                <strong>{comment.author}</strong>{comment.datePublic}
            </p>
            <li className={N.addComment}>
                <span>{comment.text}</span>
            </li>
        </div>
    )
};

export default NoteComment