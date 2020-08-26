import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom";
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAAJGX4vBIICaZ73tYtzTvMu00G40G9LAg",
    authDomain: "create-notes-5516f.firebaseapp.com",
    databaseURL: "https://create-notes-5516f.firebaseio.com",
    projectId: "create-notes-5516f",
    storageBucket: "create-notes-5516f.appspot.com",
    messagingSenderId: "1012676424231",
    appId: "1:1012676424231:web:03e1c536ae80d6a6855402"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
