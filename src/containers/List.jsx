import React from 'react';

import store from '../store';
import { dismiss, sortByDate } from '../actions';
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
    
    const sortList = () => {
        store.dispatch(sortByDate('date'))
    }
    
    return(
        <div className="Container">
            {list.length === 0 ? 
                <p>Start your journey!</p> : 
            list.map(l => 
             <div key={l.id} className="List">
                 <div className="List__header">
                      <h1 style={{ fontSize: '20px'}} className="List__title" onClick={sortList}>{l.date} <i className={getWeather(l.weather)}></i></h1>
                 </div>
                 <div className="List__content">
                     <p>{l.text}</p>
                      <button onClick={() => onDismiss(l.id)} className="btn btn-outline-dark List__deleteBtn">Delete</button>
                 </div>
               
             </div>)}
         </div>
    );
}

export default List;