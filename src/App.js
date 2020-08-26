import React, {useEffect, useState} from 'react';
import './App.css';
import Menu from './components/Menu';
import CreateNotes from './components/page/CreateNotes';
import {Route} from 'react-router-dom';
import Notes from './components/page/Notes';
import EditNotes from './components/page/EditNotes';
import Settings from './components/page/Settings';
import *as firebase from "firebase";

function App() {

    // let object = [{
    //     id: 0, name: 'roma', content: 'React is very well library.', createDate: '17 серпня, 22:35',
    //     comments: [
    //         {id: 0, author: 'jon', text: 'Yes, of course.', datePublic: '17 серпня, 23:50'},
    //     ]
    // }];

    const [notes, setNotes] = useState(null);
    const [dataPlaceSetting, setDataPlaceSetting] = useState('');


    useEffect(() => {
        debugger
        const setting = localStorage.getItem('dataPlaceSetting');
        if (setting) {
            setDataPlaceSetting(setting)
        } else {
            localStorage.setItem('dataPlaceSetting', dataPlaceSetting);
            setDataPlaceSetting('localStorage')
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('dataPlaceSetting', dataPlaceSetting);
        if (dataPlaceSetting === 'firebase') {
            firebase.database().ref('notes').child('object')
                .on('value', snap => {
                    setNotes(JSON.parse(snap.val()))
                });
        }
        if (dataPlaceSetting === 'localStorage') {
            let objectNotes = localStorage.getItem('object');
            if (objectNotes) {
                objectNotes = JSON.parse(objectNotes);
                setNotes(objectNotes)
            }
        }
    }, [dataPlaceSetting]);


    useEffect(() => {
        if (notes !== null) {
            if (dataPlaceSetting === 'firebase') {
                firebase.database().ref(`notes/object`).set(JSON.stringify(notes))
                    .catch(error => alert(error));
            }
            if (dataPlaceSetting === 'localStorage') {
                localStorage.setItem('object', JSON.stringify(notes))
            }
        }
    }, [notes]);

    const date = new Date();
    const options = {
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
                createDate: date.toLocaleString('ua', options),
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
                    datePublic: date.toLocaleString('ua', options)
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
                           createComment={createComment}
                    />
                }/>
                <Route path={'/Create'} render={() =>
                    <CreateNotes notes={notes} createNote={createNote}/>
                }/>
                <Route path={'/Edit'} render={() =>
                    <EditNotes notes={notes} editingNote={editingNote}/>
                }/>
                <Route path={'/Settings'} render={() =>
                    <Settings dataPlaceSetting={dataPlaceSetting}
                              setDataPlaceSetting={setDataPlaceSetting}
                    />
                }/>
            </div>
        </div>
    );
}

export default App;
