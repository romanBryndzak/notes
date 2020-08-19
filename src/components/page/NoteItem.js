import React from "react";
import N from './Notes.module.css'
import CommentItem from "./CommentItem";

function NoteItem({note, removeNote}) {

    const copyCommentItem = note.comment.map(comment =>
        <CommentItem comment={comment} key={comment.id}/>
    );

    return (
        <ul className={N.wrapper}>
            <div className={N.wrapperNote}>
                <p>
                    <strong>{note.name}</strong>{note.createDate}
                    <button onClick={removeNote.bind(null, note.id)}>remove</button>
                </p>
                <li>
                    <span>{note.content}</span>
                </li>
            </div>
            <p><strong>comments</strong></p>
            <div className={N.wrapperComment}>
                {copyCommentItem}
            </div>
        </ul>
    )
}

export default NoteItem