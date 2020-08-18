import React from "react";
import CommentElement from "./CommentElement";


function Comment({notes}) {
    return (
        <div>
            <h3>Comment</h3>
            <div>
                {notes.map(note => {
                    return <CommentElement
                        note={note} key={note.id}/>
                })}
            </div>
        </div>
    )
}

export default Comment