import React from 'react';
import N from './Notes.module.css'

function Settings({dataPlaceSetting, setDataPlaceSetting}) {
    return (
        <div className={N.containerSetting}>
            <h3>Settings</h3>
            <p>Your data was saved in <strong>{dataPlaceSetting}</strong>.</p>
            <button onClick={() => setDataPlaceSetting('localStorage')}>
                localStorage
            </button>
            <button onClick={() => setDataPlaceSetting('firebase')}>
                firebase
            </button>
        </div>
    )
}

export default Settings