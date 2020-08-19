import React from "react";
import NoteItem from "./NoteItem";

function Notes({notes, removeNote}) {

    return (
        <div>
            {notes.map(note => {
                    return <NoteItem
                        removeNote={removeNote}
                        note={note} key={note.id}
                    />
                }
            )}
        </div>
    )
}

export default Notes