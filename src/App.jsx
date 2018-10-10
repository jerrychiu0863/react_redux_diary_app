import React from 'react';
import Form from './components/Form';
import List from './containers/List';
import Header from './containers/Header';

import store from './store';
import { setModel } from './actions';

import './App.css';

const App = () => {
    
   const state = store.getState();
   const {color, date, isOpenModel, text} = state;
   
   const closeModel = () => {
      store.dispatch(setModel(false));
   }
       
    return (
      <div className="App">
           
           <Header />
           <List />
           <div className={isOpenModel ? "model active" : "model"}>
                <div className="model-content">
                    <Form date={date} color={color} text={text}/>
                    <button onClick={closeModel} className="model__deleteBtn">
                        <i className="fas fa-times-circle"></i>
                    </button> 
                </div>
           </div>

      </div>
    );
}

export default App;
