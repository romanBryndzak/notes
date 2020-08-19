import React from "react";
import N from './Notes.module.css'

function CommentItem({comment}) {

    return (
        <div className={N.wrapperNote}>
            <p>
                <strong>{comment.author}</strong>{comment.datePublic}
            </p>
            <li>
            <span>
                {comment.text}
            </span>
            </li>
        </div>
    )
}

export default CommentItem