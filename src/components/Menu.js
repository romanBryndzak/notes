import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';

function Menu() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <NavLink className='navbar-brand' to={'/notes'}>Navbar</NavLink>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup'
                    aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'/>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-nav'>
                    <NavLink className='nav-link' to={'/notes'}><strong>Notes</strong>
                        <span className='sr-only'>(current)</span>
                    </NavLink>
                    <NavLink className='nav-link' to={'/Create'}>Create</NavLink>
                    <NavLink className='nav-link' to={'/Edit'}>Edit</NavLink>
                    <NavLink className='nav-link' to={'/Settings'}>Settings</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Menu