import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Create from "./components/page/Create";
import {Route} from "react-router-dom";
import Notes from "./components/page/Notes";
import Edit from "./components/page/Edit";
import Comment from "./components/page/Comment";
import Settings from "./components/page/Settings";

function App() {
    const [notes, setNotes] = React.useState([
        {}
    ]);
    console.log(notes);
    function createNote(text, name) {
        setNotes(notes.concat([{
            id: Date.now(),
            name,
            content: text,
        }]))
    }

    return (
        <div className='App'>
            <header className='header'>
                <h2>Title text</h2>
                <Menu/>
            </header>
            <hr/>
            <div className='page'>
                <Route path={'/Create'} render={() =>
                    <Create createNote={createNote}/>}
                />
                <Route path={'/Edit'} render={() => <Edit/>}/>
                <Route path={'/Comment'} render={() => <Comment/>}/>
                <Route path={'/Settings'} render={() => <Settings/>}/>
                <Route path={'/Notes'} render={() => <> </>}/>
            </div>
            <div className="notes">
                <Notes/>
            </div>
        </div>
    );
}

export default App;
