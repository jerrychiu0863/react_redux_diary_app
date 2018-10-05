import React from 'react';

import store from '../store';
import { dismiss } from '../actions';
import './List.css';

const List = () => {
    
    const { list } = store.getState();
    
    const onDismiss = listId => {
       store.dispatch(dismiss(listId))
    }
    
    const getWeather = (weather) => {
        let className = "fas fa-";
        if(weather === "sun") {
            className += "sun";
        } else if(weather === "rain") {
            className += "umbrella"
        } else {
            className += "snowflake"
        }
        
        return className;

    }
    
    
    return(
        <div className="Container">
            {list.map(l => 
             <div key={l.id} className="List">
                 <div className="List__header">
                      <h1 style={{ fontSize: '20px'}} className="List__title">{l.date} <i className={getWeather(l.weather)}></i></h1>
                 </div>
                 <div className="List__content">
                     <p>{l.text}</p>
                 </div>
                <button onClick={() => onDismiss(l.id)}>X</button>
             </div>)}
         </div>
    );
}

export default List;