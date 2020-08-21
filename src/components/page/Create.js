import React from "react";
import './auxiliary.css';
import N from "./Notes.module.css";
import CreateElement from "./CreateElement";
import FormComment from "./FormComment";


function Create({notes, createNote}) {

    return <div>
        <h3>Create</h3>
        <FormComment createElement={createNote}/>
        <ul className={N.wrapper}>
            {notes.map(note => {
                return <CreateElement note={note} key={note.id}/>
            })
            }
        </ul>
    </div>
}

export default Create