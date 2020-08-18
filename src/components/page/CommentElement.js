import React from "react";
import N from "./Notes.module.css";

function CommentElement({note}) {

    return (
        <div>
            <ul className={N.wrapper}>
                <div className={N.wrapperNote}>
                    <p><strong>{note.name}</strong>{note.createDate}</p>
                    <li>
                <span>
                    {note.content}
                </span>
                    </li>
                </div>
                <div className={N.wrapperNote}>
                    <p><strong>{note.name}</strong>{note.createDate}</p>
                    <li>
                <span>
                    {note.content}
                </span>
                    </li>
                </div>
            </ul>
            <div className={N.addComment}>
                <input type="text"/>
                <button>comment on</button>
            </div>
        </div>
    )

}

export default CommentElement