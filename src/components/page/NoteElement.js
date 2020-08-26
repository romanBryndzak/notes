import React, {useState} from 'react';
import N from './Notes.module.css'
import NoteComment from './NoteComment.js';
import FormNotes from './FormNotes.js';

const NoteElement = ({note, removeNote, createComment}) => {

    const [onButValue, setOnButValue] = useState(true);

    if (!note.comments) {
        note.comments = []
    }
    const copyCommentItem = note.comments.map(comment =>
        <NoteComment comment={comment} key={comment.id}/>
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
            <div className={N.wrapperNoteComment}>
                {copyCommentItem}
            </div>
            <div className={N.onButComment}>
                {onButValue
                    ? <button onClick={() => setOnButValue(false)}>comment</button>
                    : <FormNotes
                        id={note.id} createElement={createComment}
                        pattern='[A-Z][A-Za-z]{1,} [A-Z][A-Za-z]{1,}'
                        title='Please, enter two worlds with capital letter.'
                    />
                }
            </div>
            <hr/>
        </div>
    )
};

export default NoteElement