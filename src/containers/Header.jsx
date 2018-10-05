import React from 'react';
import './Header.css';

import store from '../store';
import { setModel } from '../actions';

const Header = () => {
    
    const openModel = () => {
        store.dispatch(setModel(true));
    }
    
    return(
        <div className="Header">
            <span className="Header__title">Diary</span>
            <input type="text" />
            <button type="button" className="btn btn-outline-light" onClick={openModel}><i className="fas fa-pen"></i></button>

        </div>
    );
}

export default Header;