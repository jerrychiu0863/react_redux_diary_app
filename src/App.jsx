import React, { Component } from 'react';
import Form from './components/Form';
import List from './containers/List';
import Header from './containers/Header';

import store from './store';
import { setModel } from './actions';

import './App.css';



class App extends Component {
  constructor(props) {
      super(props);

  
  }    

    
  openModel = () => {
      store.dispatch(setModel(true));
  }
  
  closeModel = () => {
      store.dispatch(setModel(false));
  }
    
  render() {
      const state = store.getState();
      const {color, date, isOpenModel, text} = state;
      console.log(state);
   
     
    return (
      <div className="App">
                      
           <Header />
           <List />
           
            <div className={isOpenModel ? "model active" : "model"}>
                <div className="model-content">
                    <Form date={date} color={color} text={text}/>
                </div>
                
                <button onClick={this.closeModel} className="model__deleteBtn"><i className="fas fa-times-circle"></i></button> 
            </div>

      </div>
    );
  }
}

export default App;
