import React, {useState} from 'react';
import N from './Notes.module.css'
import CommentItem from './CommentItem';
import FormComment from "./FormComment";

const NoteItem = ({note, removeNote, createComment}) => {
    const [onButValue, setOnButValue] = useState(true);

    if (note.comments === undefined || null) {
        note.comments = []
    }
    const copyCommentItem = note.comments.map(comment =>
        <CommentItem comment={comment} key={comment.id}/>
    );

    return (
        <div>
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
                <div className={N.onButComment}>
                    {onButValue
                        ? <button onClick={() => setOnButValue(false)}>comment</button>
                        : <FormComment id={note.id} createElement={createComment}/>
                    }
                </div>
        </div>
    )
};

export default NoteItem