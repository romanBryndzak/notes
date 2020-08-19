import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Create from "./components/page/Create";
import {Route} from "react-router-dom";
import Notes from "./components/page/Notes";
import Edit from "./components/page/Edit";
import Settings from "./components/page/Settings";

function App() {
    const [notes, setNotes] = React.useState([
        {
            id: 0, name: 'roma', content: 'React is very well library.', createDate: '17 серпня, 22:35',
            comment: [
                {id: 0, author: 'jon', text: 'Yes, of course.', datePublic: '17 серпня, 23:50'},
            ]
        }
    ]);

    const date = new Date();
    let options = {
        hour: 'numeric',
        minute: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    function createNote(text, name) {
        setNotes(notes.concat([{
            id: Date.now(),
            name: name,
            content: text,
            createDate: date.toLocaleString("ua", options)
        }]))
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
                    <Notes notes={notes} removeNote={removeNote}/>}
                />
                <Route path={'/Create'} render={() =>
                    <Create notes={notes} createNote={createNote}/>}
                />
                <Route path={'/Edit'} render={() =>
                    <Edit notes={notes}/>}
                />
                <Route path={'/Settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
