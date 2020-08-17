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
        {id: 0, name: 'roma', content: 'React is very well library.'}
    ]);

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
                <h2>SPA for create notes</h2><hr/>
                <Menu/><hr/>
            </header>
            <div className='page'>
                <Route path={'/Create'} render={() =>
                    <Create createNote={createNote}/>}
                />
                <Route path={'/Edit'} render={() => <Edit/>}/>
                <Route path={'/Comment'} render={() => <Comment/>}/>
                <Route path={'/Settings'} render={() => <Settings/>}/>
                <Route path={'/notes'} render={() => <> </>}/>
            </div>
            <div className="notes">
                <Notes notes={notes}/>
            </div>
        </div>
    );
}

export default App;
