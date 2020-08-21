import React, {useState} from 'react';
import './App.css';
import Menu from './components/Menu';
import Create from "./components/page/Create";
import {Route} from "react-router-dom";
import Notes from "./components/page/Notes";
import Edit from "./components/page/Edit";
import Settings from "./components/page/Settings";

function App() {

    let object = [{
        id: 0, name: 'roma', content: 'React is very well library.', createDate: '17 серпня, 22:35',
        comments: [
            {id: 0, author: 'jon', text: 'Yes, of course.', datePublic: '17 серпня, 23:50'},
        ]
    }];

    let [notes, setNotes] = useState(object);

    const date = new Date();
    let options = {
        hour: 'numeric',
        minute: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    function createNote(content, name) {
        setNotes(notes.concat([{
                id: Date.now(),
                name,
                content,
                createDate: date.toLocaleString("ua", options),
                comments: undefined
            }])
        );
    }

    function createComment(text, author, id) {
        const updatedNoteComment = notes.map(note => {
            if (note.id === id) {
                note.comments.push({
                    id: Date.now(),
                    author,
                    text: text,
                    datePublic: date.toLocaleString("ua", options)
                })
            }
            return note
        });
        setNotes(updatedNoteComment)
    }

    function editingNote(text, id) {
        const updatedNoteEdit = notes.map(note => {
            if (note.id === id) {
                note.content = text
            }
            return note
        });
        setNotes(updatedNoteEdit)
    }

    function removeNote(id) {
        setNotes(notes.filter(
            note => note.id !== id
        ))
    }

    return (
        <div className='App'>
            <header className='header'>
                <h2>SPA for create notes</h2>
                <hr/>
                <Menu/>
                <hr/>
            </header>
            <div className='page'>
                <Route path={'/notes'} render={() =>
                    <Notes notes={notes}
                           removeNote={removeNote}
                           createComment={createComment}/>}
                />
                <Route path={'/Create'} render={() =>
                    <Create notes={notes} createNote={createNote}/>}
                />
                <Route path={'/Edit'} render={() =>
                    <Edit notes={notes} editingNote={editingNote}/>}
                />
                <Route path={'/Settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
